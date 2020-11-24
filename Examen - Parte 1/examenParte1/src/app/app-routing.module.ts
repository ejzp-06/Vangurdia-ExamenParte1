import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main/main.component';

//modules
import { homepageModule } from './views/homepage/homepage.module'
import { profileModule } from './views/profile/profile/profile.module'

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'homepage', loadChildren: ()=> homepageModule},
      {path: 'profile', loadChildren: ()=> profileModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
