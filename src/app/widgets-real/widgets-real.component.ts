import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './widgets-real.component.html',
  styleUrls: ['./widgets-real.component.css']
})
export class WidgetsRealComponent implements OnInit{
  selectedWidget;
  selectWidget(widget:any){
    this.selectedWidget = widget;
  }

  widgets = [
  {
    'id': 1,
    'img': 'assets/img/number-1.png',
    'name': 'Widget 1',
    'description': 'This is a description',
    'featured': true
  },
  {
    'id': 2,
    'img': 'assets/img/number-2-blue-icon.png',
    'name': 'Widget 2',
    'description': 'This is a description!',
    'featured': false
  },
  {
    'id': 3,
    'img': 'assets/img/number-3-icon.png',
    'name': 'Widget 3',
    'description': 'This is a lovely widget',
    'featured': false
  }];

  constructor(){}

  ngOnInit(){}

}
