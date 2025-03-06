import MusicModel from '../models/musicModel.js';

class MusicController{
    getAll = (req, res) => {
        const songs = MusicModel.getAll();
        res.json(songs)
    };
    create = ({ body: { title, author }}, res) => {
        if(!title){
            res.status(400).json({message: 'Por favor, insira um título para a música.'});
        }else if(!author){
            res.status(400).json({message: 'Por favor, insira um autor para a música.'});
        };
        const newSong = MusicModel.create(title, author);
        res.status(201).json(newSong);
    };
    update = ({ params: { id }, body: { title, author } }, res) => {
        const musicaAtualizada = MusicModel.update(id, title, author);
        if (!musicaAtualizada) {
            return res.status(404).json({ erro: "Música não encontrada" });
        };
        res.json(musicaAtualizada);
    };
    delete = ({ params: { id } }, res) => {
        const success = MusicModel;
        if(!success) {
            return res.status(404).json({ erro: "Música não encontrada" });
        };
        res.status(204).json({message: "Música deletada com sucesso"});
    };
};

export default new TarefaController();