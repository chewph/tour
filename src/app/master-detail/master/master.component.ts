import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { KeyupComponent } from "../../user-input/keyup/keyup.component";
import { Heroine } from "../../classes/heroine";
import { MOCKHEROES } from '../../classes/mock-heroes';



@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
	selectedHero:  Hero;
	heroesArr = HEROES;

	constructor(){
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];

	}

	ngOnInit(): void{

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




