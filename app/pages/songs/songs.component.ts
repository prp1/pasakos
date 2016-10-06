import {Component, OnInit} from '@angular/core';
import { Song } from './songs.interfaces';
import { SongsService } from './songs.service';

@Component({
    templateUrl: 'pages/songs/songs.template.html',
})
export class SongsComponent implements OnInit {

    public songs: Song[];
    public isLoaded: boolean = false;

    constructor(
        private _songsService: SongsService
    ) {}

    public ngOnInit(): void {
        this.songs = this._songsService.getSongs();
        this.isLoaded = true;
    }

    public onActionClick(song: Song): void {
        if (this._songsService.isSongPlaying(song)) {
            this._songsService.pause();
        } else {
            this._songsService.play(song);
        }
    }

    public getActionImg(song: Song): string {
        if (this._songsService.isSongPlaying(song)) {
            return 'pause';
        }

        return 'play2';
    }
}
