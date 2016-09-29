import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "pas-bottom-bar",
    templateUrl: "components/bottom-bar/bottom-bar.template.html",
})
export class BottomBarComponent {

    constructor(
        private router: Router
    ) {}

    public onNoteClick(): void {

    }

    public onListClick(): void {
        this.router.navigate(['/songs']);
    }

    public onHeartClick(): void {
        this.router.navigate(['/storieslist', 'favorite']);
    }
}
