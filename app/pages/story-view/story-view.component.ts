import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoriesService } from '../../shared/stories.service';
import { Story } from '../../shared/stories.interfaces';

@Component({
    templateUrl: 'pages/story-view/story-view.template.html',
})
export class StoryViewComponent implements OnInit {

    public story: Story;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _storiesService: StoriesService
    ) {}

    public ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.story = this._storiesService.getStory(id);
        });
    }

    public onHeartClick(storyId: number): void {
        this._storiesService.toggleFavoriteState(storyId);
    }

    public getHeartColor(storyId: number): string {
        return this._storiesService.isFavorite(storyId) ? 'red' : 'grey';
    }

    public getInfo(): string {
        return this.story.length + ' žod., '
            + this.story.time + ' min. ';
    }

}
