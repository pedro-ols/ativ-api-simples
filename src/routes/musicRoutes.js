import express from 'express';
import MusicControllers from '../controllermusicController.js';

const router = express.Router();

// Definindo as rotas para listagem de todos os Músicas
router.get('/', MusicControllers.getSongs);

// Definindo as rotas para listagem de um Música por id
router.get('/:id', MusicControllers.getSongById);

//criação de um novo Música
router.post('/', MusicControllers.createSong);

//atualização de um Música
router.put('/:id', MusicControllers.updateSong);

//deletar um Música
router.delete('/:id', MusicControllers.deleteSong);

export default router;