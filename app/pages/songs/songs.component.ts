import {Component, OnInit} from "@angular/core";
import { Page } from 'ui/page';
import { Color } from 'color';

import { Song } from './songs.interfaces';
import { SongsService } from './songs.service';

@Component({
    selector: "pas-songs",
    templateUrl: "pages/songs/songs.template.html",
})
export class SongsComponent implements OnInit {

    public songs: Song[];
    public isLoaded: boolean = false;

    constructor(
        private _songsService: SongsService,
        private _page: Page
    ) {}

    ngOnInit() {
        this.songs = this._songsService.getSongs();
        this.isLoaded = true;
        // this._page.backgroundColor = new Color("#beddf2");
    }

    public onActionClick(song: Song): void {

        if (this._songsService.isSongPlayed(song)) {
            this._songsService.pause(song);
        } else {
            this._songsService.play(song);
        }
    }

    public getActionImg(song: Song): string {
        if (this._songsService.isSongPlayed(song)) {
            return 'pause';
        }

        return 'play2';
    }
}