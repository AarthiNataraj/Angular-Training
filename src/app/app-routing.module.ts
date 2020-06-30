import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path:'learn', component:LearnComponent},
  {path:'documentation', component:DocumentationComponent},
  {path:'blog', component:BlogComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
