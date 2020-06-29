import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  public title: any;
  public amount: any;
  constructor() { }

  ngOnInit() {
    this.title = {name: 'Aarthi'};
    this.amount = 1234.98934493;
  }

  replaceText()
  {
    this.title = 'Button Clicked';
  }

  trimAmount(data) {
    return data.toFixed(2);
  }
}

