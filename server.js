import { handler } from './build/handler.js';
import express from 'express';

const app = express();

app.get('/health', (req, res) => res.end("OK"));
app.use(handler);

app.listen(3000, () => console.log('Listening on port 3000!'));