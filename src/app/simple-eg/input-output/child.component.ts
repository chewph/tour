import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'child-component',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.css' ],
	inputs: [ 'parentData' ]

})
export class ChildComponent implements OnInit{

	public parentData: string;

	constructor(){
	}

	ngOnInit(){
	}

}
