const express = require('express');		
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ Test: "server endpoint for auth 2"})
})

module.exports = server;