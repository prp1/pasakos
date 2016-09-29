import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Story } from './stories.interfaces';

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
            title: 'Linksmos',
        },
    ]

    private _stories: Story[] = [
        {
            id: 1,
            title: 'Erelis',
            text: ``,
            categoryId: 1,
        },
        {
            id: 2,
            title: 'Mėlynbarzdis',
            text: `
Kažkada labai toli, puikiuose rūmuose, gyveno turtingas žmogus, vardu Mėlynbarzdis. 

Tokią keistą pavardę jis gavo todėl, kad jo barzda buvo mėlyna. Pažiūrėti jis buvo rūstus ir žiaurus, o mėlyna barzda darė jį tokį baisų, kad niekas nenorėjo už jo tekėti. O Mėlynbarzdis jau šešis sykius buvo vedęs, tiktai niekas nežinojo, kur jo pačios dingsta. 

Tuo metu, kai prasideda mūsų pasaka, Mėlynbarzdis atvažiavo pas savo kaimynę našlę prašyti, kad leistų už jo vieną savo dukrelę — tą, kuri pati panorės už jo eiti. Kai sužinojo gražuolės sesers tas piršlybas, ėmė savitarpy bartis ir siuntinėti jaunikį viena pas kitą. Mėlynbarzdis po to iškėlė puotą, susikvietė į ją kaimynus su dukterimis ir visus nustebino savo turtu: šilkai, deimantai ir šydai visur šlamėjo, krištolinės žvakidės visur skleidė šviesos spindulius, didžiausi veidrodžiai rodė visą žmogų, paveikslai ir marmurinės stovylos puošė sienas.                
            `,
            categoryId: 1,
        },
        {
            id: 3,
            title: 'Du žalčiai',
            text: 'Du žalčiai text',
            categoryId: 1,
        },
        {
            id: 4,
            title: 'Triratukas',
            text: 'Triratukas text',
            categoryId: 2,
        },
    ];

    private _favoriteStoriesIds = [
        1
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

    public isFavorite(storyId): boolean {
        return this._favoriteStoriesIds.indexOf(storyId) > -1;
    }

    public toggleFavoriteState(storyId: number): void {
        if (this.isFavorite(storyId)) {
            var index = this._favoriteStoriesIds.indexOf(storyId);
            this._favoriteStoriesIds.splice(index, 1);
        } else {
            this._favoriteStoriesIds.push(storyId);
        }
    }

}