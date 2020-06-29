import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  public users: any;

  constructor(public request: RequestService) { }

  ngOnInit()    {
      this.request.getUser().subscribe((response) => {
        this.users = response;
        console.log('users',this.users);
      }, (error) => {
        console.log(error);
      }

      );
    }

}

