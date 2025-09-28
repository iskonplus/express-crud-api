import "dotenv/config";
import express from 'express';
import path from 'path';
import usersRouter from "./src/routers/users.router.js";
import authRouter from "./src/routers/auth.router.js";
import { notFound } from "./src/middlewares/notFound.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { logger } from "./src/middlewares/logger.js";
import {timer} from './src/middlewares/timer.js'

const app = express();
const PORT = process.env.PORT || 4002;
const __dirname = path.resolve();

app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'main.html'));
})

app.get('/authorization', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'auth.html'));
})

app.use(logger);
app.use(timer);

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/login', authRouter);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server has been started on: http://localhost:${PORT}/`);
})
