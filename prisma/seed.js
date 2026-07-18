const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const INITIAL_ACCOUNTS = [
  { email: 'shrutisharma@rulingout.com', name: 'Dr. Shruti Sharma', role: 'client', roleType: 'doctor', password: 'password', organization: 'DermaCare Clinic' },
  { email: 'amitsharma@rulingout.com', name: 'Dr. Amit Sharma', role: 'client', roleType: 'doctor', password: 'password', organization: 'DermaCare Clinic' },
  { email: 'sanjaymehta@rulingout.com', name: 'Mr. Sanjay Mehta', role: 'client', roleType: 'client_admin', password: 'password', organization: 'Apex Hospital' },
  { email: 'admin@rulingout.com', name: 'Rulingout Administrator', role: 'admin', roleType: 'super_admin', password: 'password', organization: 'Rulingout' },
  { email: 'tarangshah@rulingout.com', name: 'Dr. Tarang Shah', role: 'client', roleType: 'doctor', password: 'password', organization: 'Rhythm Medicity' },
  { email: 'nitapatel@rulingout.com', name: 'Dr. Nita Patel', role: 'client', roleType: 'doctor', password: 'password', organization: 'Rhythm Medicity' },
  { email: 'rhythmadmin@rulingout.com', name: 'Rhythm Medicity Admin', role: 'client', roleType: 'client_admin', password: 'password', organization: 'Rhythm Medicity' },
  { email: 'rhythmviewer@rulingout.com', name: 'Rhythm Medicity Viewer', role: 'client', roleType: 'client_view', password: 'password', organization: 'Rhythm Medicity' },
  { email: 'raj@rulingout.com', name: 'Raj Editor', role: 'admin', roleType: 'employee', password: 'password', organization: 'Rulingout' }
];

const INITIAL_TASKS = [
  { id: 'VID-1001', type: 'Short Form', title: '3 BP Myths', organizationName: 'Rhythm Medicity', doctorId: 'tarangshah@rulingout.com', doctorName: 'Dr. Tarang Shah', targetMonth: '2026-07', status: 'Scripting', script: 'Myth 1: You only need to check BP once a year. Truth: Blood pressure fluctuates throughout the day.\nMyth 2: If you feel fine, your BP is fine. Truth: High BP is a silent killer with no symptoms.\nMyth 3: You can stop taking medication once it is normal. Truth: It is normal because of the medication.', videoUrl: '', assignedEmp: 'emp_raj', editCount: 0 },
  { id: 'VID-1002', type: 'Long Form', title: 'Hospital Tour & Facilities', organizationName: 'Rhythm Medicity', doctorId: 'rhythmadmin@rulingout.com', doctorName: 'General/Other', targetMonth: '2026-07', status: 'Calendar (Pending)', script: '', videoUrl: '', assignedEmp: null, editCount: 0 },
  { id: 'VID-1003', type: 'Podcast', title: 'Pediatric Care in 2026', organizationName: 'Rhythm Medicity', doctorId: 'nitapatel@rulingout.com', doctorName: 'Dr. Nita Patel', targetMonth: '2026-07', status: 'Video Review', script: 'Welcome to the podcast. Today, Dr. Nita Patel joins us to discuss changes in pediatric care guidelines for 2026, focusing on pediatric nutrition, screen time limits, and digital-health patient interfaces.', videoUrl: 'https://vimeo.com/mock', assignedEmp: 'emp_raj', editCount: 1 }
];

async function main() {
  console.log('Start seeding...');
  
  // Seed Accounts
  for (const acc of INITIAL_ACCOUNTS) {
    const existing = await prisma.account.findUnique({ where: { email: acc.email } });
    if (!existing) {
      await prisma.account.create({ data: acc });
      console.log(`Created account: ${acc.email}`);
    }
  }

  // Seed Tasks
  for (const task of INITIAL_TASKS) {
    const existing = await prisma.task.findUnique({ where: { id: task.id } });
    if (!existing) {
      await prisma.task.create({ data: task });
      console.log(`Created task: ${task.title}`);
    }
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
