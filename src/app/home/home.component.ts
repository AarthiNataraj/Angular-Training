import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string;

constructor() {
  this.setTitle();
  this.changeTitle();
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

}
