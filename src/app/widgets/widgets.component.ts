import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared';

@Component({
	selector: 'app-widgets',
	templateUrl: './widgets.component.html',
	styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit{
	testWidgetService;
	textSize = 16;
	textColor = "";
	myColor = 'blue';
	colors = [
		'blue',
		'red',
		'tomato',
		'maroon',
		'papayawhip'
	]
	setMyColor(color) {
		this.myColor = color;
	}

	constructor(private widgetsService: WidgetsService){}

	ngOnInit() {
		this.testWidgetService = this.widgetsService.testService;
	}
}
