// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { StoriesService } from "./shared/stories.service";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ...navigatableComponents,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        StoriesService
    ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);