import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'keyupv1',
	templateUrl: './keyupv1.component.html',
	styleUrls: [ './keyupv1.component.css' ]
})
export class Keyupv1Component {
	values = '';

	constructor(){

	}

	onKey(event: any){
		this.values += event.target.value + ' | ';
		// target is the reference to the input text that raised the event
	}

}
