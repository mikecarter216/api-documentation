require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');
const themeRoutes = require('./routes/theme.routes');
const portfolioRoutes = require('./routes/portfolio.routes'); // ✅ import here

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/user', userRoutes);
app.use('/theme', themeRoutes);
app.use('/portfolio', portfolioRoutes); // ✅ connect here

// MongoDB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });
