import { createServer } from 'http';
import next from 'next';

const app = next({ dev: false });
const handle = app.getRequestHandler();

// Local ve CPanel uyumlu
const port = process.env.PORT || 3030;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res))
    .listen(port, () => {
      console.log(`Next.js running on port ${port}`);
    });
});
