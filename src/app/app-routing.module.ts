import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RESTAPIGETComponent } from './rest-api-get/rest-api-get.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { DrivenFormComponent } from "./driven-form/driven-form.component";
import { AboutComponent } from "./about/about.component";
import { SelectCityComponent } from "./select-city/select-city.component";
import { JavascriptComponent } from "./javascript/javascript.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RESTAPIPOSTComponent } from './rest-api-post/rest-api-post.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "javascript",
    component: JavascriptComponent,
  },
  { path: "city", component: SelectCityComponent },
  { path: "about", component: AboutComponent },
  { path: "form", component: DrivenFormComponent },
  { path: "react", component: ReactFormComponent },
  { path: "get", component: RESTAPIGETComponent },
  { path: "post", component: RESTAPIPOSTComponent},
  { path: "parent", component: ParentComponent},
  { path: "child", component: ChildComponent},
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
