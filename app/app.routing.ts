import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { StoriesListComponent } from "./pages/stories-list/stories-list.component";

export const routes = [
  { path: "", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "storieslist/:categoryid", component: StoriesListComponent },
  { path: "stories/:id", component: StoriesListComponent },
];

export const navigatableComponents = [
  HomeComponent,
  CategoriesComponent,
  StoriesListComponent,
];