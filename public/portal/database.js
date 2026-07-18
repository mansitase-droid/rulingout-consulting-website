// ── INITIAL LOCAL SEED DATABASE ──
// You can edit this file directly to configure your initial clients list, podcast scripts, and schedules.

const INITIAL_DATABASE = {
  accounts: [
    { email: 'shrutisharma@rulingout.com', name: 'Dr. Shruti Sharma', role: 'client', roleType: 'doctor', password: 'password', organization: 'DermaCare Clinic' },
    { email: 'amitsharma@rulingout.com', name: 'Dr. Amit Sharma', role: 'client', roleType: 'doctor', password: 'password', organization: 'DermaCare Clinic' },
    { email: 'sanjaymehta@rulingout.com', name: 'Mr. Sanjay Mehta', role: 'client', roleType: 'client_admin', password: 'password', organization: 'Apex Hospital' },
    { email: 'admin@rulingout.com', name: 'Rulingout Administrator', role: 'admin', roleType: 'super_admin', password: 'password', organization: 'Rulingout' },
    { email: 'tarangshah@rulingout.com', name: 'Dr. Tarang Shah', role: 'client', roleType: 'doctor', password: 'password', organization: 'Rhythm Medicity' },
    { email: 'nitapatel@rulingout.com', name: 'Dr. Nita Patel', role: 'client', roleType: 'doctor', password: 'password', organization: 'Rhythm Medicity' },
    { email: 'rhythmadmin@rulingout.com', name: 'Rhythm Medicity Admin', role: 'client', roleType: 'client_admin', password: 'password', organization: 'Rhythm Medicity' },
    { email: 'rhythmviewer@rulingout.com', name: 'Rhythm Medicity Viewer', role: 'client', roleType: 'client_view', password: 'password', organization: 'Rhythm Medicity' },
    { email: 'raj@rulingout.com', name: 'Raj Editor', role: 'admin', roleType: 'employee', password: 'password', organization: 'Rulingout' }
  ],
  tasks: [
    {
      id: 'VID-1001',
      type: 'Short Form',
      title: '3 BP Myths',
      organizationName: 'Rhythm Medicity',
      doctorId: 'tarangshah@rulingout.com',
      doctorName: 'Dr. Tarang Shah',
      targetMonth: '2026-07',
      status: 'Scripting',
      script: 'Myth 1: You only need to check BP once a year. Truth: Blood pressure fluctuates throughout the day.\nMyth 2: If you feel fine, your BP is fine. Truth: High BP is a silent killer with no symptoms.\nMyth 3: You can stop taking medication once it is normal. Truth: It is normal because of the medication.',
      videoUrl: '',
      assignedEmp: 'emp_raj',
      editCount: 0
    },
    {
      id: 'VID-1002',
      type: 'Long Form',
      title: 'Hospital Tour & Facilities',
      organizationName: 'Rhythm Medicity',
      doctorId: 'rhythmadmin@rulingout.com',
      doctorName: 'General/Other',
      targetMonth: '2026-07',
      status: 'Calendar (Pending)',
      script: '',
      videoUrl: '',
      assignedEmp: null,
      editCount: 0
    },
    {
      id: 'VID-1003',
      type: 'Podcast',
      title: 'Pediatric Care in 2026',
      organizationName: 'Rhythm Medicity',
      doctorId: 'nitapatel@rulingout.com',
      doctorName: 'Dr. Nita Patel',
      targetMonth: '2026-07',
      status: 'Video Review',
      script: 'Welcome to the podcast. Today, Dr. Nita Patel joins us to discuss changes in pediatric care guidelines for 2026, focusing on pediatric nutrition, screen time limits, and digital-health patient interfaces.',
      videoUrl: 'https://vimeo.com/mock',
      assignedEmp: 'emp_raj',
      editCount: 1
    },
    {
      id: 'VID-1004',
      type: 'Short Form',
      title: 'Modern Skincare & Anti-Aging Routines',
      organizationName: 'DermaCare Clinic',
      doctorId: 'shrutisharma@rulingout.com',
      doctorName: 'Dr. Shruti Sharma',
      targetMonth: '2026-07',
      status: 'Scripting',
      script: 'Welcome to DermaCare Aesthetics Pod. Today, we are discussing layout flows in skin clinics and how HSL-based skin analysis works. We will detail how micro-needling and dermal fillers can be integrated into your aesthetic treatments safety procedures.',
      videoUrl: '',
      assignedEmp: 'emp_raj',
      editCount: 0
    },
    {
      id: 'VID-1005',
      type: 'Podcast',
      title: 'Laser Resurfacing Tech & Myths',
      organizationName: 'DermaCare Clinic',
      doctorId: 'amitsharma@rulingout.com',
      doctorName: 'Dr. Amit Sharma',
      targetMonth: '2026-07',
      status: 'Published',
      script: 'In this episode, Dr. Amit Sharma debunks common myths surrounding laser resurfacing and skin peeling. We cover safety measures, patient recovery phases, and how specialized clinic rooms must structure paths to ensure laser protection shields.',
      videoUrl: 'https://vimeo.com/mock',
      assignedEmp: 'emp_raj',
      editCount: 0
    },
    {
      id: 'VID-1006',
      type: 'Podcast',
      title: 'Critical Layouts in Emergency Units',
      organizationName: 'Apex Hospital',
      doctorId: 'sanjaymehta@rulingout.com',
      doctorName: 'Mr. Sanjay Mehta',
      targetMonth: '2026-07',
      status: 'Scripting',
      script: 'Hello, Sanjay Mehta here. Today, I am sharing how we optimized our Apex hospital emergency room design. By aligning paths between ambulance intake, triage, and operating theaters, we managed to reduce patient transport time by 40%.',
      videoUrl: '',
      assignedEmp: 'emp_raj',
      editCount: 0
    }
  ],
  logs: [
    { taskId: 'VID-1001', user: 'Apex Creative Team', role: 'employee', text: 'Drafted initial script for Dr. Tarang Shah.', time: 'Jul 1, 2026 10:00 AM' },
    { taskId: 'VID-1003', user: 'Rhythm Medicity Admin', role: 'client_admin', text: 'Round 1 Edits: Please cut the silent pause at 1:02 and crop the bottom banner.', time: 'Jul 1, 2026 11:30 AM' }
  ],
  policies: {
    'Rhythm Medicity': { maxRevisions: 2, deadline: 48, quota: '10 Short Form, 2 Long Form' },
    'DermaCare Clinic': { maxRevisions: 3, deadline: 72, quota: '8 Short Form, 1 Long Form' },
    'Apex Hospital': { maxRevisions: 2, deadline: 48, quota: '5 Short Form, 1 Long Form' },
    'Standalone': { maxRevisions: 2, deadline: 48, quota: '3 Short Form' }
  },
  podcasts: [
    // Maintain old podcasts array for full backward compatibility
    {
      id: 'pod-1',
      organizationName: 'DermaCare Clinic',
      speakerName: 'Dr. Shruti Sharma',
      title: 'Modern Skincare & Anti-Aging Routines',
      script: 'Welcome to DermaCare Aesthetics Pod. Today, we are discussing layout flows in skin clinics and how HSL-based skin analysis works. We will detail how micro-needling and dermal fillers can be integrated into your aesthetic treatments safety procedures.',
      status: 'draft',
      editsRemaining: 3,
      scheduleDate: '',
      scheduleTime: '',
      scheduleStatus: 'none'
    },
    {
      id: 'pod-2',
      organizationName: 'DermaCare Clinic',
      speakerName: 'Dr. Amit Sharma',
      title: 'Laser Resurfacing Tech & Myths',
      script: 'In this episode, Dr. Amit Sharma debunks common myths surrounding laser resurfacing and skin peeling. We cover safety measures, patient recovery phases, and how specialized clinic rooms must structure paths to ensure laser protection shields.',
      status: 'confirmed',
      editsRemaining: 0,
      scheduleDate: '2026-07-02',
      scheduleTime: '11:00 AM',
      scheduleStatus: 'confirmed'
    },
    {
      id: 'pod-3',
      organizationName: 'Apex Hospital',
      speakerName: 'Mr. Sanjay Mehta',
      title: 'Critical Layouts in Emergency Units',
      script: 'Hello, Sanjay Mehta here. Today, I am sharing how we optimized our Apex hospital emergency room design. By aligning paths between ambulance intake, triage, and operating theaters, we managed to reduce patient transport time by 40%.',
      status: 'draft',
      editsRemaining: 2,
      scheduleDate: '',
      scheduleTime: '',
      scheduleStatus: 'none'
    }
  ],
  notifications: [
    {
      id: 'notif-1',
      organizationName: 'DermaCare Clinic',
      clientName: 'Dr. Amit Sharma',
      message: 'DermaCare Clinic (Dr. Amit Sharma) confirmed the script for "Laser Resurfacing Tech & Myths". Please schedule their shoot.',
      podcastId: 'pod-2',
      read: true,
      timestamp: '2026-06-25T10:00:00Z'
    }
  ]
};
