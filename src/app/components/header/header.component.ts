import { Component, OnInit } from '@angular/core';
import { Storefront } from '../interfaces/storefront.interface';
import { APP_Links } from '../../app.constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  storefront: Storefront={
    Name: 'The Huddle'
  };

  app:any;

  constructor() { 
    this.app = APP_Links;
  }


  ngOnInit(): void {
    
  }

  doLogout(){}

}
