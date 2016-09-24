import { Component, OnInit } from "@angular/core";
import { Page } from 'ui/page';
import { Color } from 'color';

@Component({
    selector: "pas-home",
    templateUrl: "pages/home/home.template.html",
})
export class HomeComponent implements OnInit {

    constructor(
        private _page: Page
    ) {}

    public ngOnInit() {
        // this._page.actionBarHidden = true;
        this._page.backgroundColor = new Color("#3080c9");
        this._page.backgroundImage = "~/images/bg2.png";        
    }

}
