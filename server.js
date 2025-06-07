// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database');
const dishesRoutes = require('./routes/dishes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve static files from the "public" folder (e.g., index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Set up API routes for dishes
app.use('/api/dishes', dishesRoutes);

// Use PORT from environment or fallback to 3000
const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server running on http://localhost:${PORT}`);
    });
});