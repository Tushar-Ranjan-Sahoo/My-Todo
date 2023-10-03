const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const connectDatabase = require('./database');
// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(handleError);
connectDatabase();


// Error handling middleware

function handleError(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Internalll server error' });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});