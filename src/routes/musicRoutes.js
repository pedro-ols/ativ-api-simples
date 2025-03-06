import express from 'express';
import MusicControllers from '../controller/musicController.js';

const router = express.Router();
// Mensagem de boas-vindas

// Retorna uma mensagem de boas-vindas
router.get('/', MusicControllers.getWelcomeMessage);

// Definindo as rotas para listagem de todos os Músicas
router.get('/lista-musicas', MusicControllers.getAllMusics);

// Definindo as rotas para listagem de um Música por id
router.get('/:id', MusicControllers.getMusicById);

//criação de um novo Música
router.post('/', MusicControllers.createMusic);

//atualização de um Música
router.put('/:id', MusicControllers.updateMusic);

//deletar um Música
router.delete('/:id', MusicControllers.deleteMusic);

export default router;
