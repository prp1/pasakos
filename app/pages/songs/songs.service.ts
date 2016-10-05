import { Injectable } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { Song } from './songs.interfaces';
import { songs } from '../../data/songs';

@Injectable()
export class SongsService {

    private _player: TNSPlayer;
    private _activeSong: Song;
    private _isPlaying: boolean = false;

    constructor() {
        this._player = new TNSPlayer();
    }

    public getSongs(): Song[] {
        return songs;
    }

    public play(song: Song): void {

        if (this.isSongPlayed(song)) {
            return;
        }

        if (this._isPlaying) {
            this._player.pause();

            if (!this.isSongActive(song)) {
                this._player.dispose();
            }
        }

        this._isPlaying = true;
        this._activeSong = song;

        this._player.playFromFile({
            audioFile: `~/audio/${song.fileName}`,
        });
    }

    public pause(song: Song): void {
        this._player.pause();
        this._isPlaying = false;
    }

    public stop(song: Song): void {
        this._player.dispose();
        this._isPlaying = false;
        this._activeSong = null;
    }

    public isSongActive(song: Song): boolean {
        return this._activeSong && this._activeSong.id === song.id;
    }

    public isSongPlayed(song: Song): boolean {
        return this._isPlaying
            && this.isSongActive(song);
    }

}
