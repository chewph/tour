import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'show-hide',
	template: `<h3>Show and hide</h3>
		<input type="checkbox" (change)="onCheckChange()"> {{ change }}
		<br>
		<br>
		Example using ternary if
		<br>
		<button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
		show = {{show}}
		<br>
		<div *ngIf="show; else elseBlock">Text to show</div>
		<ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>

	<!--
	  <div *ngFor="#input of inputList">
	    {{ input.label }}
	    <input type="text"
		   [ngModel]="getProp(input.bindTo)"
		   (ngModelChange)="setProp(input.bindTo, $event)">
	  </div>
	
	  inputList = [
	    {
		 label: "Enter your name",
		 bindTo: "name"
	    },
	    {
		 label: "Enter your email",
		 bindTo: "email"
	    }
	  ];
	
	  getProp(prop) {
	    return this[prop];
	  }
	
	  setProp(prop, value) {
	    this[prop] = value;
	  }
	-->`
})
export class ShowHideComponent implements OnInit{
	show: boolean = true;
	change: string = 'No check';

	onCheckChange(){
		console.log(this.change);
		if (this.change === 'No check'){
			this.change = 'Checked';
		} else {
			this.change = 'No check';
		}

	}
	constructor(){

	}

	ngOnInit(){
	}

}
