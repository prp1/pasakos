import {Component, Input} from '@angular/core';
import { StoriesService } from '../../shared/stories.service';

@Component({
    selector: 'pas-favorite',
    templateUrl: 'components/favorite/favorite.template.html',
})
export class FavoriteComponent {

    @Input() public storyId: number;

    constructor(
        private _storiesService: StoriesService
    ) {}

    public onHeartClick(): void {
        this._storiesService.toggleFavoriteState(this.storyId);
    }

    public getHeartColor(): string {
        return this._storiesService.isFavorite(this.storyId) ? 'red' : 'grey';
    }

}
