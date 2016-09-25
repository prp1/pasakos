import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { StoriesListComponent } from "./pages/stories-list/stories-list.component";
import { StoryViewComponent } from "./pages/story-view/story-view.component";
import { SongsComponent } from "./pages/songs/songs.component";

export const routes = [
    { path: "", component: HomeComponent },
    { path: "songs", component: SongsComponent },
    { path: "categories", component: CategoriesComponent },
    { path: "storieslist/:categoryid", component: StoriesListComponent },
    { path: "stories/:id", component: StoryViewComponent },
];

export const navigatableComponents = [
    HomeComponent,
    CategoriesComponent,
    StoriesListComponent,
    StoryViewComponent,
    SongsComponent,
];