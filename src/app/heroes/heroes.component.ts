import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { KeyupComponent } from "../user-input/keyup/keyup.component";
import { Heroine } from "../classes/heroine";
import { HEROS_DATA } from '../classes/heroes';
import { HeroService } from '../hero.service';

/*
* While the details of a selected hero displays at the bottom of the HeroesComponent,
* users should be able to navigate to the HeroDetailComponent in the following additional ways:

 - From the dashboard to a selected hero.
 - From the heroes list to a selected hero.
 - From a "deep link" URL pasted into the browser address bar.
 */
@Component({
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: [ 'heroes.component.css' ],
})
export class HeroesComponent implements OnInit{
	mockHeroes: Hero[]; // could be: mockHeroes = this.heroService.getMockHeroesAsynService();
	heros : Hero[];
	selectedHero:  Hero;
	heroesArr = HEROES;

	constructor(private heroService: HeroService){
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];

	}

	ngOnInit(): void{
		// choose to use heros or mockHeroes
		//this.getMockHeroes();
		//this.getHeros();
		this.getHerosAsyn();
	}

	getMockHeroes(): void {
		//this.mockHeroes = this.heroService.getMockHeroesAsynService();
		this.heroService.getMockHeroesAsynService().then(mockHeroes => this.mockHeroes = mockHeroes);
		//this.heroService.getHeroesSlowly().then(mockHeroes => this.mockHeroes = mockHeroes);
	}

	getHeros(): void {
		this.heros = this.heroService.getHeros();
	}

	getHerosAsyn(): void {
		this.heroService.getHerosAsynService().then(heros => this.heros = heros);
	}


	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

/*	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}*/

}

const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
];


