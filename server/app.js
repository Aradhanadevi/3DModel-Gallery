const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
dotenv.config({path:'./config.env'});

// Route to fetch and display the data

const middleware = (req, res, next) => {
    console.log(`Hello, I am middleware`);
    next();
};

app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
