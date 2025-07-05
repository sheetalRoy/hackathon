const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/usersRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api', userRoutes);
app.use('/api/book', doctorRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Backend running without database');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
