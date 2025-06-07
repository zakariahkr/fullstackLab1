const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database');
const dishesRoutes = require('./routes/dishes');

dotenv.config();

const app = express();

app.use('/api/dishes', dishesRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log(`Server running on port hhtp://localhost:${PORT}`);
    });
});