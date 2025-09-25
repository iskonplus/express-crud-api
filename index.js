import "dotenv/config";
import express from 'express';
import path from 'path';
import router from './src/routers/server.js';
import { notFound } from "./src/middlewares/notFound.js";
import {errorHandler} from "./src/middlewares/errorHandler.js"

const app = express();
const PORT = process.env.PORT || 4002;
const __dirname = path.resolve();

app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'main.html'));
})

app.get('/about', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'about.html'));
})

app.use(express.json());
app.use('/api/users', router);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server has been started on: http://localhost:${PORT}/`);
})
