// In-memory array to store patients
const patients = [
    { id: 1, fullName: 'John Doe', age: 30, gender: 'Male', contact: '1234567890' },
    { id: 2, fullName: 'Jane Smith', age: 28, gender: 'Female', contact: '0987654321' }
  ];

const appointments = [
    
];

exports.registerPatient = (req, res) => {
  const { fullName, email, password, age, gender, contact } = req.body;

  // Basic validation
  if (!fullName || !email || !password || !gender) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  // Check if email already exists in array
  const existingPatient = patients.find(p => p.email === email);
  if (existingPatient) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const newPatient = {
    id: patients.length + 1, // simple incremental id
    fullName,
    email,
    password, // Note: In production, hash passwords!
    age,
    gender,
    contact,
  };

  patients.push(newPatient);

  res.status(201).json({
    message: 'Patient registered successfully',
    patient: newPatient,
  });
};

exports.getPatients = (req, res) => {
    if (patients.length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }
  
    res.status(200).json({
      message: 'List of all patients',
      patients: patients,
    });
  };

  exports.getAppointments = (req, res) => {
    res.status(200).json({
      message: 'List of all appointments',
      appointments,
    });
  };
