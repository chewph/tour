import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
	selector: 'app-bind-property',
	templateUrl: './bind-property.component.html',
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

	setUppercaseName(name: string){
		console.log('setUppercaseName fired :' + this.anotherHero.name);
		this.anotherHero.name = name.toUpperCase();
		console.log(this.anotherHero.name );
	}


	printHeroName(){
		console.log('Print Hero name: ' + this.anotherHero.name);
	}

}
