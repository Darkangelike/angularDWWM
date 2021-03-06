import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniaturePersonComponent } from './miniature-person/miniature-person.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SecondPageChildAComponent } from './second-page-child-a/second-page-child-a.component';
import { SecondPageChildBComponent } from './second-page-child-b/second-page-child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniaturePersonComponent,
    FirstPageComponent,
    SecondPageComponent,
    SecondPageChildAComponent,
    SecondPageChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
