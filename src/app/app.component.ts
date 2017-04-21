import { Component } from '@angular/core';
import { Hero } from './hero';
import { Keyupv1Component } from "./UserInput/keyupv1/keyupv1.component";
import { Heroine } from "./heroine";
import { MOCKHEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [HeroService]
})
export class AppComponent{
	mockHeroes: Hero[];
	heroesArr = HEROES;

	selectedHero:  Hero;
	title: string;
	heroes: Hero[];
	myHero: Hero;
	anotherHero: Hero = {
		id: 17,
		name: 'Wonder Woman'
	};
	heroine: Heroine;

	constructor(private heroService: HeroService){
		/*The constructor itself does nothing.
		The parameter simultaneously defines a private heroService property and
		identifies it as a HeroService injection site.

		Angular knows to supply an instance of the HeroService when it creates an AppComponent.
		*/

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
		this.mockHeroes = this.heroService.getMockHeroes();
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
