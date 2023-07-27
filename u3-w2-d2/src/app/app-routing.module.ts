import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ActivePostComponent } from './components/pages/active-post/active-post.component';
import { InactivePostComponent } from './components/pages/inactive-post/inactive-post.component';

const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path: 'active-post', component: ActivePostComponent},
  {path: 'inactive-post', component: InactivePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
