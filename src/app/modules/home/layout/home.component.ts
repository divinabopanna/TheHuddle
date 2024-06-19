import { Component, HostBinding, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeStyle, Title } from '@angular/platform-browser';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { APP_Links } from '../../../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() height: string = '20rem';
  
  /**
   *  brightness it's type is number to set the brightness of jumbotron.
   */
  @Input() brightness: number = 40;
  /**
   * specify image postion.
   */
  @Input() imagePosition: 'left' | 'center' | 'right'='center';

  app: any

  constructor() {
    this.app = APP_Links;
  }
  ngOnInit(): void {

  }
}
