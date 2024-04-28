require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = (process.env.STATUS === 'development') ? process.env.DEV_PORT : process.env.PROD_PORT;

app.listen(PORT, () => {
    console.log(`${process.env.STATUS} server running on port ${PORT}`);
});