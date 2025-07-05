const specialists = [
    'Cardiologist',
    'Pediatrician',
    'Dermatologist',
    'Neurologist'
  ];
const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: specialists[0],
      contact: 'sarah.johnson@example.com',
      phone: '123-456-7890',
      availableDays: ['Monday', 'Wednesday', 'Friday']
    },
    {
      id: 2,
      name: 'Dr. Ahmed Khan',
      specialty: specialists[1],
      contact: 'ahmed.khan@example.com',
      phone: '234-567-8901',
      availableDays: ['Tuesday', 'Thursday']
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      specialty: specialists[2],
      contact: 'emily.chen@example.com',
      phone: '345-678-9012',
      availableDays: ['Monday', 'Thursday']
    },
    {
      id: 4,
      name: 'Dr. Raj Patel',
      specialty: specialists[3],
      contact: 'raj.patel@example.com',
      phone: '456-789-0123',
      availableDays: ['Wednesday', 'Friday']
    }
  ];
  
  module.exports = { specialists, doctors };
  