const { doctors, specialists } = require('../data/doctors'); // adjust path as needed
const axios = require('axios');

// Mock appointment storage (in-memory array)
const appointments = [];

// ✅ Get list of all doctors
exports.getDoctors = (req, res) => {
  res.status(200).json({
    message: 'List of doctors',
    doctors
  });
};

// ✅ Get list of all specialists
exports.getSpecialists = (req, res) => {
  res.status(200).json({
    message: 'List of specialists',
    specialists
  });
};



// JSON Server URL
const JSON_SERVER_URL = 'http://localhost:3001/appointments';

exports.bookAppointment = async (req, res) => {
  const appointment = req.body;

  try {
    const existingAppointmentsResponse = await axios.get(JSON_SERVER_URL);
    const existingAppointments = existingAppointmentsResponse.data;

    // Step 2: Check if doctor is already booked for that timeslot
    const isBooked = existingAppointments.some(a => 
      a.doctor === appointment.doctor && a.date === appointment.date && a.timeSlot === appointment.timeSlot
    );

    if (isBooked) {
      // Step 3: If booked, return error
      return res.status(400).json({
        message: 'This doctor is already booked for the selected date and time slot.'
      });
    }

    const response = await axios.post(JSON_SERVER_URL, appointment);
    return res.status(201).json({
      message: 'Appointment saved successfully via Node!',
      data: response.data
    });
  } catch (error) {
    console.error('Error saving appointment to JSON DB:', error.message);
    return res.status(500).json({ message: 'Failed to save appointment' });
  }
};
