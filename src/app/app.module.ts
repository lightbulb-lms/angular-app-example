import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { JeopardyComponent } from './components/jeopardy/jeopardy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JeopardyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
