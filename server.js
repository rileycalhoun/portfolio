import dotenv from 'dotenv';
import { handler } from './build/handler.js';
import express from 'express';

dotenv.config();
let port = process.env.PORT || 3000;

const app = express();

app.get('/health', (req, res) => res.end("OK"));
app.use(handler);

app.listen(port, () => console.log(`Listening on port ${port}!`));