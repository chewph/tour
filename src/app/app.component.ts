import { Component } from '@angular/core';
import { Hero } from './classes/hero';
import { KeyupComponent } from "./user-input/keyup/keyup.component";
import { Heroine } from "./classes/heroine";
import { MOCKHEROES } from './classes/mock-heroes';
import { HeroService } from './hero.service';
import { GetComponentPropertyComponent } from './simple-eg/get-component-property/get-component-property.component';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [HeroService]
})
export class AppComponent{
	appName: string;

	constructor(){
		this.appName = 'Tour of Heroes Tutorial';
	}

}


