import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
	selector: 'app-bind-property',
	templateUrl: './bind-property.component.html',
	styleUrls: [ './bind-property.component.css' ]
})
export class BindPropertyComponent implements OnInit{
	anotherHero: Hero = {		// (3)
		id: 17,
		name: 'Wonder Woman'
	};

	constructor(){
	}

	ngOnInit(){
	}

	printHeroName(){
		console.log(this.anotherHero.name);
	}

}
