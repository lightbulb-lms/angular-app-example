import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {JeopardyComponent} from './components/jeopardy/jeopardy.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'jeopardy', component: JeopardyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
