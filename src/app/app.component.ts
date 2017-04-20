import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent{
	title : string;
	heroes: Hero[];
	myHero : Hero;

	constructor(){
		this.title ='Tour of Heroes';
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];

		this.heroes = [ new Hero(1, 'Superman'),
					 new Hero(13, 'Spiderman'),
					 new Hero(15, 'Batman'),
					 new Hero(20, 'Mr. Incredible')
					];
		this.myHero = this.heroes[0];
	}
}
