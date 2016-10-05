import { Injectable } from '@angular/core';
import { stories } from '../data/stories';
import { Story } from './stories.interfaces';

@Injectable()
export class StoriesService {

    private _favoriteStoriesIds: number[] = [];

    public getStory(storyId: number): Story {
        let story;

        stories.forEach((s) => {
            if (s.id === storyId) {
                story = s;
            }
        });

        return story;
    }

    public getStories(categoryId: number): Story[] {
        if (!categoryId) {
            return stories;
        }

        let storiesOfCategory = [];

        stories.forEach((s) => {
            if (s.categoryId === categoryId) {
                storiesOfCategory.push(s);
            }
        });

        return storiesOfCategory;
    }

    public isFavorite(storyId: number): boolean {
        return this._favoriteStoriesIds.indexOf(storyId) > -1;
    }

    public toggleFavoriteState(storyId: number): void {
        if (this.isFavorite(storyId)) {
            const index = this._favoriteStoriesIds.indexOf(storyId);
            this._favoriteStoriesIds.splice(index, 1);
        } else {
            this._favoriteStoriesIds.push(storyId);
        }
    }

}
