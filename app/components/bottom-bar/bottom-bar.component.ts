import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../../pages/songs/songs.service';

@Component({
    selector: 'pas-bottom-bar',
    templateUrl: 'components/bottom-bar/bottom-bar.template.html',
})
export class BottomBarComponent {

    constructor(
        private _router: Router,
        private _songsService: SongsService
    ) {}

    public onNoteClick(): void {
        this._songsService.toggleActiveSong();
    }

    public onListClick(): void {
        this._router.navigate(['/songs']);
    }

    public onHeartClick(): void {
        this._router.navigate(['/storieslist', 'favorite']);
    }

    public getNoteIcon(): string {
        return this._songsService.isPlaying() ? 'note' : 'note-disabled';
    }
}
