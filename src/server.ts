import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../public')));

// Define a route to serve the index.html file
app.get('/', (req: Request, res: Response) => {
  console.log("Serving /!!!");
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed (SIGTERM).');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed (SIGINT).');
    process.exit(0);
  });
});

export {app, server};