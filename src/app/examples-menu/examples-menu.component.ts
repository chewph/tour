import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { KeyupComponent } from "../user-input/keyup/keyup.component";
import { Heroine } from "../classes/heroine";
import { HEROS_DATA } from '../classes/heroes';
import { HeroService } from '../hero.service';
import { GetComponentPropertyComponent } from '../simple-eg/get-component-property/get-component-property.component';

@Component({
	selector: 'examples-menu',
	templateUrl: './examples-menu.component.html',
})
export class ExamplesMenuComponent implements OnInit{

	appName: string;

	constructor(){
		this.appName = 'List of Angular examples';
	}

	ngOnInit(){
	}

}
