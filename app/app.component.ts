import {Component} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public onActionBarClick() {
        this.router.navigate(['/']);
    }
    
}
