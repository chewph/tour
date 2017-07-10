import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
	selector: 'app-forloop-eg',
	templateUrl: './forloop-eg.component.html',
})
export class ForloopEgComponent implements OnInit{

	heroes: Hero[];

	constructor(){
		this.heroes = [ new Hero(1, 'Superman'),
			new Hero(13, 'Spiderman'),
			new Hero(15, 'Batman'),
			new Hero(20, 'Mr. Incredible')
		];
	}

	ngOnInit(){
	}

}

