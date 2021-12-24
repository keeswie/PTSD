const http = require('http');
const connectDB = require('./DBConnection/connection');
const app = require('./app');

connectDB();
const Port = process.env.Port || 3000;

const server = http.createServer(app);

server.listen(Port);