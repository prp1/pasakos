import { Injectable } from '@angular/core';
import { categories } from '../../data/categories';
import { Category } from './categories.interfaces';

@Injectable()
export class CategoriesService {

    public getCategories(): Category[] {
        return categories;
    }
}
