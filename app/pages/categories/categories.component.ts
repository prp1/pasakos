import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoriesService } from "../../shared/stories.service";

@Component({
    selector: "pas-categories",
    templateUrl: "pages/categories/categories.template.html",
})
export class CategoriesComponent implements OnInit {

    public categories = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _storiesService: StoriesService
    ) { }

    public ngOnInit() {
        this.categories = this._storiesService.getCategories();
    }

    public goToStoriesByCategory(categoryId) {
        this.router.navigate(['/storieslist', categoryId]);
    }
}