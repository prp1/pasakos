import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './categories.service';
import { Category } from './categories.interfaces';

@Component({
    templateUrl: 'pages/categories/categories.template.html',
})
export class CategoriesComponent implements OnInit {

    public categories: Category[] = [];
    public isLoaded: boolean = false;

    constructor(
        private _router: Router,
        private _categoriesService: CategoriesService
    ) {}

    public ngOnInit(): void {
        this.categories = this._categoriesService.getCategories();
        this.isLoaded = true;
    }

    public goToStoriesByCategory(categoryId: number): void {
        this._router.navigate(['/storieslist', categoryId]);
    }

}
