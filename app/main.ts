import { platformNativeScriptDynamic, NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { routes, navigatableComponents } from './app.routing';
import { StoriesService } from './shared/stories.service';
import { SongsService } from './pages/songs/songs.service';
import { CategoriesService } from './pages/categories/categories.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        BottomBarComponent,
        LayoutComponent,
        FavoriteComponent,
        ...navigatableComponents,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        CategoriesService,
        StoriesService,
        SongsService,
    ],
})
class AppComponentModule {

}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
