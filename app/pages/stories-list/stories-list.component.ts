import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoriesService } from "../../shared/stories.service";
import { Story } from "../../shared/stories.interfaces";

@Component({
    selector: "pas-stories-list",
    templateUrl: "pages/stories-list/stories-list.template.html",
})
export class StoriesListComponent implements OnInit {

    public stories = [];
    public isLoaded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _storiesService: StoriesService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let categoryId = +params['categoryid'];
            this.stories = this._storiesService.getStories(categoryId);
            this.isLoaded = true;
        });
    }

    public goToStory(id: number): void {
        this.router.navigate(['/stories', id]);
    }

    public onHeartClick(storyId: number): void {
        this._storiesService.toggleFavoriteState(storyId);
    }

    public getHeartColor(storyId: number): string {
        return this._storiesService.isFavorite(storyId) ? 'red' : 'grey';
    }
}