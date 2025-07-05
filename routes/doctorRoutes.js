const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors');

const appointmentController = require('../controllers/bookAppointmentController');

// Routes
router.get('/doctors', appointmentController.getDoctors);
router.get('/specialists', appointmentController.getSpecialists);
router.post('/bookAppointment', appointmentController.bookAppointment);
  
  module.exports = router;