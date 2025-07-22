const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>W05 Final Project Portfolio</h1>
    <p><strong>Name:</strong> Michael Akpan</p>
    <p><strong>Collections:</strong> User, Theme</p>
    <p><strong>CRUD Operations:</strong> GET, POST, PUT, DELETE for both collections</p>
    <p><strong>Deployed Swagger URL:</strong> <a href="/api-docs">View Swagger Docs</a></p>
    <p><strong>Contribution:</strong></p>
    <ul>
      <li>Designed and implemented User CRUD API</li>
      <li>Designed and implemented Theme CRUD API</li>
      <li>Created Swagger documentation</li>
      <li>Handled error management and deployment</li>
    </ul>
  `);
});

module.exports = router;
