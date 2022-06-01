import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { OnSalePipe } from './on-sale.pipe';
import { JavascriptComponent } from './javascript/javascript.component';
import { SelectCityComponent } from './select-city/select-city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './about/directive/high-light.directive';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { RESTAPIGETComponent } from './rest-api-get/rest-api-get.component';
import { RESTAPIPOSTComponent } from './rest-api-post/rest-api-post.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    OnSalePipe,
    JavascriptComponent,
    SelectCityComponent,
    PageNotFoundComponent,
    HighLightDirective,
    DrivenFormComponent,
    ReactFormComponent,
    RESTAPIGETComponent,
    RESTAPIPOSTComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
