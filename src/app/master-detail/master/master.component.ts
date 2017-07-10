import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { KeyupComponent } from "../../user-input/keyup/keyup.component";
import { Heroine } from "../../classes/heroine";
import { HEROS_DATA } from '../../classes/heroes';



@Component({
  selector: 'app-master',
  template: `
	  <h2>My Heroes using Master (list) - Detail (record)</h2>
	  <h3>Master - MasterComponent</h3>
	  <input type="checkbox" (change)="onSelectShowLittleTour()">Show Little Tour
	  <ul class="heroes">
		  <li *ngFor="let hero of heroesArr" (click)="onSelect(hero)"
			 [class.selected]="hero === selectedHero">
			  <span class="badge">{{ hero.id }}</span> {{ hero.name }}
		  </li>
	  </ul>

	  <!--<hero-detail [heroesArrInput]="heroesArr"></hero-detail>-->
	  <detail [heroDetailInput]="selectedHero"></detail>
	  <hr>
	  <div *ngIf="showLittleTour">
		  <!--heroesArr from MasterComponent-->
		  <little-tour [heroesArrInput]="heroesArr">Passing selected Hero to LittleHero</little-tour>
	  </div>
  `,
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
	selectedHero:  Hero;
	heroesArr = HEROES;
	showLittleTour : boolean = false;

	constructor(){
		//this.heroes = ['Windstorm', 'Superman', 'Batman', 'Fronzon', 'Spiderman'];
	}

	ngOnInit(): void{
	}

	onSelectShowLittleTour(){
		console.log(this.showLittleTour);
		if (this.showLittleTour){
			this.showLittleTour = false;
		} else {
			this.showLittleTour = true;
		}

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




