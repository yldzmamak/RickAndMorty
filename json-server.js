const express = require('express');
const app = express();

// Custom CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace * with the specific origin you want to allow
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your routes and json-server configuration...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
