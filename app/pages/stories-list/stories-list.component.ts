import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoriesService } from "../../shared/stories.service";

@Component({
    selector: "pas-stories-list",
    templateUrl: "pages/stories-list/stories-list.template.html",
})
export class StoriesListComponent implements OnInit {

    public stories = [];

    private _storiesByType = {
        favorite: [
            { title: 'Labanaktukas'},
        ],
        lullaby: [
            { title: 'Tyli naktis'},
            { title: 'Labanaktukas'},
            { title: 'Baltoji varnelė'},
        ]
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _storiesService: StoriesService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let categoryId = +params['categoryid'];
            this.stories = this._storiesService.getStories(categoryId);
        });
    }

    public goToStory(id: number) {
        this.router.navigate(['/stories', id]);
    }
}