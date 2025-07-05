const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://shtlroy6:<db_password>@cluster0.tmutqak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
  
  // ✅ Define a simple Patient schema
  const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  });
  
  const Patient = mongoose.model('Patient', patientSchema);
  
  // ✅ API Routes
  
  // Test route
  app.get('/', (req, res) => {
    res.send('🌐 Healthcare API is live');
  });
  
  // Get all patients
  app.get('/patients', async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch patients' });
    }
  });
  
  // Add a new patient
  app.post('/patients', async (req, res) => {
    try {
      const newPatient = new Patient(req.body);
      await newPatient.save();
      res.status(201).json(newPatient);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // ✅ Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });