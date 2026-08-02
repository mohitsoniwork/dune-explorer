import { createServer } from 'http';
import handler from './api/contact.js';

const server = createServer(async (req, res) => {
  if (req.url?.startsWith('/api/')) {
    await handler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ status: 'error', message: 'Not found' }));
  }
});

const PORT = process.env.API_PORT || 3001;
server.listen(PORT, () => {
  console.log(`Dev API server running on http://localhost:${PORT}`);
});