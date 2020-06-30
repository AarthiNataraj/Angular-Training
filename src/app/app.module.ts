import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { BlogComponent } from './blog/blog.component';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    DocumentationComponent,
    BlogComponent,
    HeaderComponent,
    ChildComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
