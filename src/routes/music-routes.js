import express from 'express';
import MusicControllers from '../controllers/musicController.js';

const router = express.Router();

// Definindo as rotas para listagem de todos os Músicas
router.get('/', MusicController.getSongs);

// Definindo as rotas para listagem de um Música por id
router.get('/:id', MusicController.getSongById);

//criação de um novo Música
router.post('/', MusicController.createSong);

//atualização de um Música
router.put('/:id', MusicController.updateSong);

//deletar um Música
router.delete('/:id', MusicController.deleteSong);

export default router;