const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware');

// Import routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const timetableRoutes = require('./routes/timetableRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
});

const app = express();

app.use(bodyParser.json());

// Use imported routes
app.use(userRoutes);
app.use(courseRoutes);
app.use(timetableRoutes);


// Protected route that requires authentication
// Use the verifyToken middleware from authMiddleware
app.get('/protected', authMiddleware, (req, res) => {
    // Access user information from req.user
    res.json({ message: 'Authenticated user', user: req.user });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
