import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'parent-component',
	template: `<h2>Parent component</h2>
			<label>Enter Parent value:</label>

			<input type="text" #parentText (keyup)="0" >
			<child-component [parentData]="parentText.value"></child-component>`,
})
export class ParentComponent implements OnInit{

	constructor(){
	}

	ngOnInit(){
	}

}
