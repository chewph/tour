import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { KeyupComponent } from "../user-input/keyup/keyup.component";
import { Heroine } from "../classes/heroine";
import { MOCKHEROES } from '../classes/mock-heroes';
import { HeroService } from '../hero.service';


@Component({
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: [ 'heroes.component.css' ],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit{
	mockHeroes: Hero[];
	selectedHero:  Hero;
	heroesArr = HEROES;

	constructor(private heroService: HeroService){
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];

	}

	ngOnInit(): void{
		this.getMockHeroes();
	}

	getMockHeroes(): void {
		//this.mockHeroes = this.heroService.getMockHeroes();
		this.heroService.getMockHeroes().then(mockHeroes => this.mockHeroes = mockHeroes);
		//this.heroService.getHeroesSlowly().then(mockHeroes => this.mockHeroes = mockHeroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}


}

const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
];


