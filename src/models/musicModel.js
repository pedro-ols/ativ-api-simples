import fs from 'fs';
import path from 'path';

class MusicModel {
    static songs = [];

    static loadSongs() {
        const dataPath = path.resolve('src/data/musics.json');
        const data = fs.readFileSync(dataPath, 'utf-8');
        this.songs = JSON.parse(data);
    }

    static getAll() {
        return this.songs;
    }

    static getById(id) {
        return this.songs.find(song => song.id === id);
    }

    static create(title, author) {
        const newSong = { id: this.songs.length + 1, title, author };
        this.songs.push(newSong);
        return newSong;
    }

    static update(id, title, author) {
        const songIndex = this.songs.findIndex(song => song.id === id);
        if (songIndex === -1) {
            return null;
        }
        this.songs[songIndex] = { id, title, author };
        return this.songs[songIndex];
    }

    static delete(id) {
        const songIndex = this.songs.findIndex(song => song.id === id);
        if (songIndex === -1) {
            return false;
        }
        this.songs.splice(songIndex, 1);
        return true;
    }
}

// Carregar as músicas ao iniciar o servidor
MusicModel.loadSongs();

export default MusicModel;