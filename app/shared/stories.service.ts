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

    public getStories(categoryId: number | 'favorite'): Story[] {
        if (!categoryId) {
            return stories;
        }

        let choseStories = [];
        let rule = (s: Story) => {
            return s.categoryId === categoryId;
        };

        if (categoryId === 'favorite') {
            rule = (s: Story) => {
                return this._favoriteStoriesIds.indexOf(s.id) > -1;
            };
        }

        stories.forEach((s) => {
            if (rule(s)) {
                choseStories.push(s);
            }
        });

        return choseStories;
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
