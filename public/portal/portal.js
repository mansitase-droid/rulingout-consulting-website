// ── PORTAL STATE & DATA MANAGEMENT ──

const fallbackAccounts = [
  { email: 'admin@rulingout.com', name: 'Rulingout Administrator', role: 'admin', password: 'password', organization: 'Rulingout' }
];

// Initialize Database in localStorage
function initDatabase() {
  const accounts = JSON.parse(localStorage.getItem('portal_accounts'));
  const needsReseed = !accounts || !accounts.some(a => a.organization);
  
  if (needsReseed) {
    const seedAccounts = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.accounts : fallbackAccounts;
    const seedPodcasts = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.podcasts : [];
    const seedNotifications = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.notifications : [];
    const seedTasks = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.tasks : [];
    const seedLogs = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.logs : [];
    const seedPolicies = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.policies : {};

    localStorage.setItem('portal_accounts', JSON.stringify(seedAccounts));
    localStorage.setItem('portal_podcasts', JSON.stringify(seedPodcasts));
    localStorage.setItem('portal_notifications', JSON.stringify(seedNotifications));
    localStorage.setItem('portal_tasks', JSON.stringify(seedTasks));
    localStorage.setItem('portal_logs', JSON.stringify(seedLogs));
    localStorage.setItem('portal_policies', JSON.stringify(seedPolicies));
  } else {
    if (!localStorage.getItem('portal_tasks')) {
      const seedTasks = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.tasks : [];
      localStorage.setItem('portal_tasks', JSON.stringify(seedTasks));
    }
    if (!localStorage.getItem('portal_logs')) {
      const seedLogs = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.logs : [];
      localStorage.setItem('portal_logs', JSON.stringify(seedLogs));
    }
    if (!localStorage.getItem('portal_policies')) {
      const seedPolicies = (typeof INITIAL_DATABASE !== 'undefined') ? INITIAL_DATABASE.policies : {};
      localStorage.setItem('portal_policies', JSON.stringify(seedPolicies));
    }
  }
}

// Get Data
function getPodcasts() {
  return JSON.parse(localStorage.getItem('portal_podcasts')) || [];
}

function savePodcasts(podcasts) {
  localStorage.setItem('portal_podcasts', JSON.stringify(podcasts));
}

// Get Tasks
function getTasks() {
  return JSON.parse(localStorage.getItem('portal_tasks')) || [];
}

function saveTasks(tasks) {
  localStorage.setItem('portal_tasks', JSON.stringify(tasks));
}

// Get Logs
function getLogs() {
  return JSON.parse(localStorage.getItem('portal_logs')) || [];
}

function saveLogs(logs) {
  localStorage.setItem('portal_logs', JSON.stringify(logs));
}

// Get Policies
function getPolicies() {
  return JSON.parse(localStorage.getItem('portal_policies')) || {};
}

function savePolicies(policies) {
  localStorage.setItem('portal_policies', JSON.stringify(policies));
}

// Get Notifications
function getNotifications() {
  return JSON.parse(localStorage.getItem('portal_notifications')) || [];
}

function saveNotifications(notifs) {
  localStorage.setItem('portal_notifications', JSON.stringify(notifs));
}

// Auth Handlers
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('portal_session'));
}

function loginUser(email, password) {
  initDatabase();
  const accounts = JSON.parse(localStorage.getItem('portal_accounts'));
  const user = accounts.find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
  
  if (user) {
    if (user.status === 'inactive') {
      return { success: false, message: 'Your account has been deactivated. Please contact system admin.' };
    }
    
    // Update lastLogin timestamp in database
    const now = new Date();
    const timeString = `${now.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    user.lastLogin = timeString;
    localStorage.setItem('portal_accounts', JSON.stringify(accounts));

    localStorage.setItem('portal_session', JSON.stringify({
      email: user.email,
      name: user.name,
      role: user.role,
      roleType: user.roleType,
      status: user.status || 'active',
      organization: user.organization
    }));
    return { success: true, role: user.role };
  }
  return { success: false, message: 'Invalid email or password.' };
}

// Logout
function logoutUser() {
  localStorage.removeItem('portal_session');
  window.location.href = '/login';
}

// Auth Check
function checkAuthentication(requiredRole) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = '/login';
    return null;
  }
  if (requiredRole && user.role !== requiredRole) {
    window.location.href = './apex-dashboard.html';
    return null;
  }
  return user;
}

// ── CLIENT CONTROL HANDLERS ──

// Edit Script Draft
function updateScriptDraft(podcastId, scriptContent) {
  const podcasts = getPodcasts();
  const pod = podcasts.find(p => p.id === podcastId);
  
  if (!pod) return { success: false, message: 'Podcast not found' };
  if (pod.status !== 'draft') return { success: false, message: 'This script is locked and cannot be edited.' };
  if (pod.editsRemaining <= 0) return { success: false, message: 'No editing rights remaining.' };

  pod.script = scriptContent;
  pod.editsRemaining -= 1;
  savePodcasts(podcasts);
  return { success: true, editsRemaining: pod.editsRemaining };
}

// Confirm Script
function finalizeScript(podcastId) {
  const podcasts = getPodcasts();
  const pod = podcasts.find(p => p.id === podcastId);
  
  if (!pod) return { success: false, message: 'Podcast not found' };
  
  pod.status = 'confirmed';
  pod.editsRemaining = 0;
  savePodcasts(podcasts);

  // Send Notification to Admin
  const notifs = getNotifications();
  notifs.unshift({
    id: 'notif-' + Date.now(),
    organizationName: pod.organizationName,
    clientName: pod.speakerName,
    message: `${pod.organizationName} (${pod.speakerName}) confirmed the script for "${pod.title}". Please schedule their shoot.`,
    podcastId: pod.id,
    read: false,
    timestamp: new Date().toISOString()
  });
  saveNotifications(notifs);

  return { success: true };
}

// Confirm Schedule
function confirmSchedule(podcastId) {
  const podcasts = getPodcasts();
  const pod = podcasts.find(p => p.id === podcastId);
  if (!pod) return { success: false, message: 'Podcast not found' };

  pod.scheduleStatus = 'confirmed';
  pod.status = 'scheduled';
  savePodcasts(podcasts);
  return { success: true };
}

// ── ADMIN CONTROL HANDLERS ──

// Add new script
function uploadNewPodcast(orgName, speakerName, title, script) {
  const podcasts = getPodcasts();
  const newPod = {
    id: 'pod-' + Date.now(),
    organizationName: orgName,
    speakerName: speakerName,
    title: title,
    script: script,
    status: 'draft',
    editsRemaining: 3,
    scheduleDate: '',
    scheduleTime: '',
    scheduleStatus: 'none'
  };

  podcasts.push(newPod);
  savePodcasts(podcasts);
  return { success: true };
}

// Schedule Shoot
function schedulePodcastShoot(podcastId, date, time) {
  const podcasts = getPodcasts();
  const pod = podcasts.find(p => p.id === podcastId);
  if (!pod) return { success: false, message: 'Podcast not found.' };

  pod.scheduleDate = date;
  pod.scheduleTime = time;
  pod.scheduleStatus = 'proposed';
  savePodcasts(podcasts);

  // Mark all notifications related to this podcast as read
  const notifs = getNotifications();
  notifs.forEach(n => {
    if (n.podcastId === podcastId) {
      n.read = true;
    }
  });
  saveNotifications(notifs);

  return { success: true };
}

// Add new client account
function addNewClient(name, email, password, organizationName) {
  const accounts = JSON.parse(localStorage.getItem('portal_accounts')) || [];
  const exists = accounts.some(a => a.email.toLowerCase() === email.toLowerCase());
  
  if (exists) {
    return { success: false, message: 'A client with this email already exists.' };
  }

  accounts.push({
    email: email.toLowerCase(),
    name: name,
    role: 'client',
    password: password,
    organization: organizationName || 'Standalone'
  });
  
  localStorage.setItem('portal_accounts', JSON.stringify(accounts));
  return { success: true };
}

// Reset client password
function resetClientPassword(email, newPassword) {
  const accounts = JSON.parse(localStorage.getItem('portal_accounts')) || [];
  const user = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    return { success: false, message: 'Client account not found.' };
  }

  user.password = newPassword;
  localStorage.setItem('portal_accounts', JSON.stringify(accounts));
  return { success: true };
}

// Remove client account
function deleteClient(email) {
  const accounts = JSON.parse(localStorage.getItem('portal_accounts')) || [];
  const clientToRemove = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
  
  if (!clientToRemove) {
    return { success: false, message: 'Client account not found.' };
  }

  const updatedAccounts = accounts.filter(a => a.email.toLowerCase() !== email.toLowerCase());
  localStorage.setItem('portal_accounts', JSON.stringify(updatedAccounts));

  // Check if there are other client accounts remaining in this organization
  const orgName = clientToRemove.organization;
  const remainingInOrg = updatedAccounts.some(a => a.organization.toLowerCase() === orgName.toLowerCase() && a.role === 'client');

  // If no client accounts left in this organization, clean up related podcasts and notifications
  if (!remainingInOrg && orgName !== 'Rulingout') {
    const podcasts = getPodcasts();
    const updatedPodcasts = podcasts.filter(p => p.organizationName.toLowerCase() !== orgName.toLowerCase());
    savePodcasts(updatedPodcasts);

    const notifs = getNotifications();
    const updatedNotifs = notifs.filter(n => n.organizationName.toLowerCase() !== orgName.toLowerCase());
    saveNotifications(updatedNotifs);
  }

  return { success: true };
}

// Auto init on load
initDatabase();
