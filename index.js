import "dotenv/config";
import express from 'express';
import path from 'path';
import router from './src/routers/server.js';

const app = express();
const PORT = process.env.PORT || 4002;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'main.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'static', 'about.html'));
})

app.use(router);



app.listen(PORT, () => {
    console.log(`Server has been started on: http://localhost:${PORT}/`);
})
