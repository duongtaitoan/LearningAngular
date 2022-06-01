import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { OnSalePipe } from './on-sale.pipe';
import { JavascriptComponent } from './javascript/javascript.component';
import { SelectCityComponent } from './select-city/select-city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './about/directive/high-light.directive';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactFormComponent } from './react-form/react-form.component';

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
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
