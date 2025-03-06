import express from 'express';
import MusicControllers from '../controller/musicController.js';

const router = express.Router();

// Definindo as rotas para listagem de todos os Músicas
router.get('/', MusicControllers.getAll);

// Definindo as rotas para listagem de um Música por id
router.get('/:id', MusicControllers.getSongById);

//criação de um novo Música
router.post('/', MusicControllers.create);

//atualização de um Música
router.put('/:id', MusicControllers.update);

//deletar um Música
router.delete('/:id', MusicControllers.delete);

export default router;