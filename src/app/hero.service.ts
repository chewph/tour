import  { Injectable } from '@angular/core';
import { Hero } from './classes/hero';
import { HEROS_DATA } from './classes/heroes';


/*
 Instead of copying and pasting the same code over and over, create a single reusable data service and
 inject it into the components that need it. Using a separate service keeps components lean and focused
 on supporting the view, and makes it easy to unit-test components with a mock service.
 */

@Injectable()
export class HeroService{
	heros : Hero[] = HEROS_DATA;

	/*
		export const HEROS_DATA: Hero[] = [
			{id: 11, name: 'Mr. Nice'},
		]
	*/
	getMockHeroesAsynService(): Promise<Hero[]>{
		return Promise.resolve(HEROS_DATA);
	}

	getHerosAsynService(): Promise<Hero[]>{
		return Promise.resolve(HEROS_DATA);
	}
	// Alternate method that uses heros property
	getHeros(): Hero[]{
		// or return HEROS_DATA;
		return this.heros;
	}

	getHero(id: number): Promise<Hero> {
		return this.getHerosAsynService()
		.then(heroes => heroes.find(hero => hero.id === id));
	}

	getHeroesSlowly(): Promise<Hero[]>{
		return new Promise(resolve =>{
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getMockHeroesAsynService()), 2000);
		});
	}
}