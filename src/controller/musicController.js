import MusicModel from '../models/musicModel.js';

class MusicController {
    getWelcomeMessage = (req, res) => {
        res.json({message: "Bem-vindo à nossa API!!!😁😀😀 Nosso tema escolhido foi ♪ MÚSICAS ♪"})
    }
    getAllMusics = (req, res) => {
        const songs = MusicModel.getAll();
        res.json(songs);
    };

    getMusicById = (req, res) => {
        const { id } = req.params;
        const song = MusicModel.getById(id);
        if (!song) {
            return res.status(404).json({ erro: "Música não encontrada" });
        }
        res.json(song);
    };

    createMusic = ({ body: { title, author } }, res) => {
        if (!title) {
            res.status(400).json({ message: 'Por favor, insira um título para a música.' });
        } else if (!author) {
            res.status(400).json({ message: 'Por favor, insira um autor para a música.' });
        }
        const newSong = MusicModel.create(title, author);
        res.status(201).json(newSong);
    };

    updateMusic = ({ params: { id }, body: { title, author } }, res) => {
        const musicaAtualizada = MusicModel.update(id, title, author);
        if (!musicaAtualizada) {
            return res.status(404).json({ erro: "Música não encontrada" });
        }
        res.json(musicaAtualizada);
    };

    deleteMusic = (req, res) => {
        const { id } = req.params;
        const success = MusicModel.delete(id);
        if (!success) {
            return res.status(404).json({ erro: "Música não encontrada" });
        }
        res.status(201).send({ message: "Música deletada com sucesso" });
    };
}

export default new MusicController();