import { Component, OnInit } from '@angular/core';
import { Heroine } from '../../classes/heroine';

@Component({
	selector: 'little-tour',
	templateUrl: './little-tour.component.html',
	styleUrls: [ './little-tour.component.css' ]
})
export class LittleTourComponent implements OnInit{
	heroines: Heroine[];
	className = 'Little Tour of Heroines';

	constructor(){
		this.heroines = [ new Heroine(1, 'Superwoman'),
			new Heroine(2, 'Supergirl'),
			new Heroine(3, 'Spider Woman'),
			new Heroine(4, 'Spider Girl'),
		];
	}

	ngOnInit(){
	}

	addHeroine(newHeroineName: string){
		if (newHeroineName){
			this.heroines.push(new Heroine(this.heroines.length+1, newHeroineName));
		} else {
			console.log("Empty String: " + newHeroineName);
		}
	}

}
