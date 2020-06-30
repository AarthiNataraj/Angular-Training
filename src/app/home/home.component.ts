import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string;
  public name: FormControl;
constructor() {
  this.name = new FormControl('', Validators.required);
  this.setTitle();
  //this.changeTitle();
}

//settittle
private setTitle() {
  this.title = 'Aarthi Webpage';
}
private changeTitle (){
  setTimeout( () => {
    this.title = 'Title changed-Aarthi Angular WebPage'} , 2000);
  }

public getTitle () {
  return this.title;
}

  ngOnInit(): void {
  }

  register() {
    console.log(this.name.value);
  }
}
