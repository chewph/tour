import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'child-component',
	template: `<h2>Child component</h2>

			<p>Value from parent component</p>{{ parentData }}`,
	inputs: [ 'parentData' ]

})
export class ChildComponent implements OnInit{

	public parentData: string;

	constructor(){
	}

	ngOnInit(){
	}

}
