import { Component, OnInit } from "@angular/core";
import { Router, Params } from '@angular/router';

import { CategoriesService } from "./categories.service";

@Component({
    templateUrl: "pages/categories/categories.template.html",
})
export class CategoriesComponent implements OnInit {

    public categories = [];
    public isLoaded: boolean = false;

    constructor(
        private _router: Router,
        private _categoriesService: CategoriesService
    ) { }

    public ngOnInit() {
        this.categories = this._categoriesService.getCategories();
        this.isLoaded = true;
    }

    public goToStoriesByCategory(categoryId: number): void {
        this._router.navigate(['/storieslist', categoryId]);
    }

}
