import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';

import { StoriesService } from "../../shared/stories.service";

@Component({
    selector: "pas-categories",
    templateUrl: "pages/categories/categories.template.html",
})
export class CategoriesComponent implements OnInit {

    public categories = [];
    public isLoaded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _storiesService: StoriesService,
        private _page: Page
    ) { }

    public ngOnInit() {
        this.categories = this._storiesService.getCategories();
        this.isLoaded = true;
        // this._page.backgroundColor = new Color("#beddf2");
    }

    public goToStoriesByCategory(categoryId) {
        this.router.navigate(['/storieslist', categoryId]);
    }
}