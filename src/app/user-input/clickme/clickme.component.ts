import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'click-me',
	templateUrl: './clickme.component.html',
})
export class ClickMeComponent implements OnInit{
	clickMessage = 'No click!';

	constructor(){
	}

	ngOnInit(){
	}

	onClickMe(){
		this.clickMessage = 'Clicked!';
	}

}
