import {Component} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { action } from 'ui/dialogs';
import { TNSPlayer } from 'nativescript-audio';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    private _player: TNSPlayer;
    private _isPlaying = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public onActionBarClick() {
        this.router.navigate(['/']);
    }

    public onPlayMusicClick() {

        if (!this._player) {
            this._player = new TNSPlayer();
        }

        // var options = {
        //     title: "Race Selection",
        //     message: "Choose your race",
        //     cancelButtonText: "Cancel",
        //     actions: ["Human", "Elf", "Dwarf", "Orc"]
        // };

        // action(options).then((result) => {
        //     console.log(result);
        // });

        if (!this._isPlaying) {
            this._player.playFromFile({
                audioFile: '~/audio/song1.mp3',
                completeCallback: () => {

                },
                errorCallback: () => {

                }
            })

            this._isPlaying = true;
        } else {
            this._player.pause();
            this._isPlaying = false;
        }

    }
}
