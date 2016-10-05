import { Injectable } from "@angular/core";

@Injectable()
export class CategoriesService {

    private _categories = [
        {
            id: 1,
            title: 'Nuotykių 987',
        },
        {
            id: 2,
            title: 'Baugios',
        },
        {
            id: 3,
            title: 'Linksmos',
        },
        {
            id: 3,
            title: 'Linksmos',
        },
        {
            id: 3,
            title: 'Linksmos',
        },
        {
            id: 3,
            title: 'Linksmos',
        },
        {
            id: 3,
            title: 'Linksmos1',
        },
        {
            id: 3,
            title: 'Linksmos2',
        },
        {
            id: 3,
            title: 'Linksmos3',
        },
        {
            id: 3,
            title: 'Linksmos4',
        },
        {
            id: 3,
            title: 'Linksmos5',
        },
        {
            id: 3,
            title: 'Linksmos11112',
        },
    ];

    public getCategories() {
        return this._categories;
    }

}