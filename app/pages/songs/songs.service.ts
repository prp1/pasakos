import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { TNSPlayer } from 'nativescript-audio';


import { Song } from './songs.interfaces';

@Injectable()
export class SongsService {

    private _player: TNSPlayer;
    private _activeSong: Song;
    private _isPlaying: boolean = false;

    private _songs: Song[] = [
        {
            id: 1,
            title: 'Lopšinė 1',
            fileName: 'song1.mp3'
        },
        {
            id: 2,
            title: 'Lopšinė 2',
            fileName: 'song2.mp3'
        },
        {
            id: 3,
            title: 'Lopšinė 3',
            fileName: 'song3.mp3'
        },
    ];

    constructor() {
        this._player = new TNSPlayer();
    }

    public getSongs() {
        return this._songs;
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
            audioFile: `~/audio/${song.fileName}`
        });
    }

    public pause(song: Song): void {
        this._player.pause();
        this._isPlaying = false
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