// Import necessary modules
import express from 'express';
import { join, extname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Set the port for the server to listen on
const PORT = process.env.PORT || 8080;

// Create an Express app
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(join(__dirname, 'dist')));

// Catch-all route to serve the Vite app's HTML file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
