require("dotenv").config(); // After server setup?

const server = require('./api/server.js');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`API running on ${PORT}`))