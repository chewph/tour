import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'show-hide',
	templateUrl: './show-hide.component.html',
	styleUrls: [ './show-hide.component.css' ]
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
