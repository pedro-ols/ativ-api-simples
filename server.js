import express from 'express';

const app = express();

app.use(express.json());
app.use();

const serverPort = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Tá funfando na porta ${serverPort}`)
})