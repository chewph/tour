import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Keyupv1Component } from "../UserInput/keyupv1/keyupv1.component";
import { Heroine } from "../heroine";
import { MOCKHEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: [ 'heroes.component.css' ],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit{
	myHero: Hero;				// (1)
	heroine: Heroine;			// (2)
	anotherHero: Hero = {		// (3)
		id: 17,
		name: 'Wonder Woman'
	};
	mockHeroes: Hero[];
	heroesArr = HEROES;

	selectedHero:  Hero;
	title: string;
	heroes: Hero[];




	constructor(private heroService: HeroService){

		this.title = 'Tour of Heroes';
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];

		this.heroes = [ new Hero(1, 'Superman'),
			new Hero(13, 'Spiderman'),
			new Hero(15, 'Batman'),
			new Hero(20, 'Mr. Incredible')
		];
		this.myHero = this.heroes[ 0 ];
		this.heroine = new Heroine(45, 'Spiderwoman');

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

	printHeroName(){
		console.log(this.anotherHero.name);
	}
}

const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];
