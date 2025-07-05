const express = require('express');
const router = express.Router();
const {
  getUsers,
//   createUser,
  getUserById
} = require('../controllers/userController');

const { loginUser } = require('../controllers/authController');
const { registerPatient, getPatients, getAppointments  } = require('../controllers/registrationController');
// GET all users
router.get('/', getUsers);

// GET user by ID
// router.get('/:id', getUserById);


// POST /api/login
router.post('/login', loginUser);
router.post('/register', registerPatient);
router.get('/patients', getPatients);
router.get('/appointments', getAppointments);
// POST create new user
// router.post('/', createUser);

module.exports = router;