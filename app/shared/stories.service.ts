import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class StoriesService {

    private _categories = [
        {
            id: 1,
            title: 'Nuotykių',
        },
        {
            id: 2,
            title: 'Baugios',
        },
        {
            id: 3,
            title: 'Linksmos',
        },        
    ]

    private _stories = [
        {
            id: 1,
            title: 'Erelis',
            text: 'Erelis text',
            categoryId: 1,
            isFavorite: false,
        },
        {
            id: 2,
            title: 'Du žalčiai',
            text: 'Du žalčiai text',
            categoryId: 1,
            isFavorite: false,
        },
        {
            id: 3,
            title: 'Triratukas',
            text: 'Triratukas text',
            categoryId: 2,
            isFavorite: true,
        },
    ];

    public getStory(storyId: number) {
        let story;

        this._stories.forEach((s) => {
            if (s.id === storyId) {
                story = s;
            }
        });

        return story;
    }

    public getStories(categoryId: number) {
        if (!categoryId) {
            return this._stories;
        }

        let stories = [];

        this._stories.forEach((s) => {
            if (s.categoryId === categoryId) {
                stories.push(s);
            }
        });

        return stories;
    }

    public getCategories() {
        return this._categories;
    }

    // private _storiesByType = {
    //     favorite: [
    //         { title: 'Labanaktukas'},
    //     ],
    //     lullaby: [
    //         {
    //             title: 'Tyli naktis',
    //             text: 'Tyli naktis text text text'
    //         },
    //         {
    //             title: 'Labanaktukas',
    //             text: 'Labanaktukas text text text'
    //         },
    //         {
    //             title: 'Baltoji varnelė',
    //             text: 'Baltoji varnelė text text text'
    //         },
    //     ]
    // };

}