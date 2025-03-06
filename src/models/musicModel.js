// Modelo responsável por todas as operações de dados
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class MusicModel {
    constructor() {
        this.dataPath = join(__dirname, '../data/musics.json');
    }

    async getAllMusics() {
        const data = await fs.readFile(this.dataPath, 'utf8');
        return JSON.parse(data);
    }

    async getMusicById(id) {
        const musics = await this.getAllMusics();
        return musics.find(music => music.id === id);
    }

    async createMusic(musicData) {
        const musics = await this.getAllMusics();
        const newMusic = {
            id: Date.now().toString(),
            ...musicData
        };
        musics.push(newMusic);
        await fs.writeFile(this.dataPath, JSON.stringify(musics, null, 2));
        return newMusic;
    }

    async updateMusic(id, musicData) {
        const musics = await this.getAllMusics();
        const index = musics.findIndex(music => music.id === id);
        if (index === -1) return null;

        musics[index] = { ...musics[index], ...musicData };
        await fs.writeFile(this.dataPath, JSON.stringify(musics, null, 2));
        return musics[index];
    }

    async deleteMusic(id) {
        const musics = await this.getAllMusics();
        const filteredmusics = musics.filter(music => music.id !== id);
        await fs.writeFile(this.dataPath, JSON.stringify(filteredmusics, null, 2));
        return true;
    }
}

export default new MusicModel();