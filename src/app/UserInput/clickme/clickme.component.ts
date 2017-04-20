import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'click-me',
	templateUrl: './clickme.component.html',
	styleUrls: [ './clickme.component.css' ]
})
export class ClickmeComponent implements OnInit{
	clickMessage = 'No click!';

	constructor(){
	}

	ngOnInit(){
	}

	onClickMe(){
		this.clickMessage = 'You are my hero!';
	}

}
