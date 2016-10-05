import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { Color } from 'color';

@Component({
    templateUrl: 'pages/home/home.template.html',
})
export class HomeComponent implements OnInit {

    constructor(
        private _page: Page
    ) {}

    public ngOnInit(): void {
        this._page.backgroundColor = new Color('#3080c9');
        this._page.backgroundImage = '~/images/sun3.png';
    }

}
