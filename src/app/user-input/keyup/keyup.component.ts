import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'keyup',
	templateUrl: './keyup.component.html',
	styleUrls: [ './keyup.component.css' ]
})
export class KeyupComponent {
	values = '';

	constructor(){

	}

	onKey(event: any){
		this.values += event.target.value + ' | ';
		// target is the reference to the input text that raised the event
	}

}
