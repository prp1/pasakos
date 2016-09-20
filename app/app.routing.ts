import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";

export const routes = [
  { path: "", component: HomeComponent },
  { path: "categories", component: CategoriesComponent }
];

export const navigatableComponents = [
  HomeComponent,
  CategoriesComponent,
];