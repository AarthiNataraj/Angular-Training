import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
    //public title = ' Aarthi Web app';
  constructor() {
    this.setTitle();
    this.changeTitle();
  }
  private setTitle() {
    this.title = 'Aarthi Webpage';
  }
  private changeTitle (){
    setTimeout( () => {
      this.title = 'Title changed-Aarthi'} , 2000);
    }

  public getTitle () {
    return this.title;
  }
}
