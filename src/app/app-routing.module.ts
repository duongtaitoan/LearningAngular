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
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
