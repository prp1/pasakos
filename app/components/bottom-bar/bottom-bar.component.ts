import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../../pages/songs/songs.service';
import { Location } from '@angular/common';

@Component({
    selector: 'pas-bottom-bar',
    templateUrl: 'components/bottom-bar/bottom-bar.template.html',
})
export class BottomBarComponent {

    constructor(
        private _router: Router,
        private _songsService: SongsService,
        private _location: Location
    ) {}

    public onNoteClick(): void {
        this._songsService.toggleActiveSong();
    }

    public onHomeClick(): void {
        this._router.navigate(['/']);
    }

    public onBackClick(): void {
        this._location.back();
    }

    public getNoteIcon(): string {
        return this._songsService.isPlaying() ? 'note' : 'note-disabled';
    }
}
