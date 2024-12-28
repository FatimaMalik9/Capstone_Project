// require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myDB2';
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://fatimaumer107:UWTwIzvGbZjsSdnm@cluster0.sjhyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Booking Model
const bookingSchema = new mongoose.Schema({
  pickupLocation: String,
  destination: String,
  pickupTime: Date,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Define routes
app.post('/api/bookings', async (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Raw Body:', req.rawBody);
  console.log('Parsed Body:', req.body); // Log raw body for debugging
  const { pickupLocation, destination, pickupTime } = req.body;

  // Validate the incoming data
  if (!pickupLocation || !destination || !pickupTime) {
    console.log('Validation failed');
    return res.status(400).json({ error: 'All fields are required!' });
  }

  console.log('Booking received:', req.body);
  res.status(201).json({ message: 'Booking confirmed successfully!', bookingDetails: req.body });
});
// Test endpoint
app.get('/api/available-areas', (req, res) => {
  const areas = [
    { area: 'Block 1, Karachi', status: 'Available' },
    { area: 'Block 3, Karachi', status: 'Limited Availability' },
    { area: 'Block 5, Karachi', status: 'Unavailable' },
  ];
  res.json(areas);
});
// Cab Management Endpoints
const cabs = []; // Temporary in-memory array for cabs

// Get all cabs
app.get('/api/cabs', (req, res) => {
  res.json(cabs);
});

// Add a new cab
app.post('/api/cabs', (req, res) => {
  const cab = { id: cabs.length + 1, ...req.body };
  cabs.push(cab);
  res.status(201).json(cab);
});

// Update cab status
app.put('/api/cabs/:id', (req, res) => {
  const cab = cabs.find((c) => c.id === parseInt(req.params.id));
  if (!cab) return res.status(404).json({ error: 'Cab not found' });
  Object.assign(cab, req.body);
  res.json(cab);
});

// Get bookings
app.get('/api/bookings', (req, res) => {
  // For now, return a static list of bookings
  res.json([
    { pickupLocation: 'Block 1', destination: 'Block 3', pickupTime: '2024-12-28T15:00:00' },
    { pickupLocation: 'Block 2', destination: 'Block 4', pickupTime: '2024-12-29T10:00:00' }
  ]);
});



// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
