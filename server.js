import express from 'express';
import router from './src/routes/musicRoutes.js';

const app = express();

app.use(express.json());
app.use('/musicas', router);

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
    console.log(`Bagulho tá a pampa na porta ${serverPort}`);
});
