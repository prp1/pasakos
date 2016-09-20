import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoriesService } from "../../shared/stories.service";

@Component({
    selector: "pas-story-view",
    templateUrl: "pages/story-view/story-view.template.html",
})
export class StoryViewComponent implements OnInit {

    public story;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _storiesService: StoriesService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.story = this._storiesService.getStory(id);
        });
    }
}