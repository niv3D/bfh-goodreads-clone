const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');


const app = express();
// const server = require('http').Server(app);


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api",routes);

module.exports = app;