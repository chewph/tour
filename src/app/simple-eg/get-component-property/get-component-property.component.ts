import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { Heroine } from '../../classes/heroine';

@Component({
	selector: 'app-get-component-property',
	template: `My favourite hero is: {{ myHero.name }}
			<br>
			<!--heroine from heroine: Heroine-->
			My Heroine is: {{ heroine.name }}`,
})
export class GetComponentPropertyComponent implements OnInit{
	myHero: Hero;
	heroine: Heroine;
	heroes: Hero[];

	constructor(){

		this.heroes = [ new Hero(1, 'Superman'),
			new Hero(13, 'Spiderman'),
			new Hero(15, 'Batman'),
			new Hero(20, 'Mr. Incredible')
		];
		this.myHero = this.heroes[ 0 ];
		this.heroine = new Heroine(45, 'Spiderwoman');
	}

	ngOnInit(){
	}

}
