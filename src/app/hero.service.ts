/**
 * Created by cph on 21/4/17.
 */

import  { Injectable } from '@angular/core';
import { Hero } from './classes/hero';
import { MOCKHEROES } from './classes/mock-heroes';


/*
 Instead of copying and pasting the same code over and over, create a single reusable data service and
 inject it into the components that need it. Using a separate service keeps components lean and focused
 on supporting the view, and makes it easy to unit-test components with a mock service.
 */

@Injectable()

export class HeroService{
	getMockHeroes(): Promise<Hero[]>{
		return Promise.resolve(MOCKHEROES);
	}

	getHeroesSlowly(): Promise<Hero[]>{
		return new Promise(resolve =>{
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getMockHeroes()), 2000);
		});
	}
}