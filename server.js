require('dotenv').config();
const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');
const themeRoutes = require('./routes/theme.routes');
const portfolioRoutes = require('./routes/portfolio.routes'); // ✅ import here

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve swagger.json at /swagger.json
app.get('/swagger.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'swagger.json'));
});

// Swagger Docs UI configured for Render
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerUrl: 'https://api-documentation-d313.onrender.com/swagger.json', // ✅ This ensures Swagger UI fetches from your live site
  })
);

// API Routes
app.use('/user', userRoutes);
app.use('/theme', themeRoutes);
app.use('/portfolio', portfolioRoutes); // ✅ connect here

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
  });