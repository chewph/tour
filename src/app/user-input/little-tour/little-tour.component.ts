import { Component, OnInit, Input} from '@angular/core';
import { Heroine } from '../../classes/heroine';
import { Hero } from "../../classes/hero";

@Component({
	selector: 'little-tour',
	template: `<h3>{{ className }}</h3>
				<!--heroDetail is passed as input from MasterComponent's html template-->
				<div *ngIf="heroesDetailArr">
					From MasterComponent's herosArr property via 
					template little-tour [heroesArrInput]="heroesArr" directive
					<ul>
						<li *ngFor="let h of heroesDetailArr">
							{{ h.id }} {{ h.name }}
						</li>
					</ul>
				</div>

				<input #newHeroine Heroine.value); newHeroine.value='' "
					  (blur)="addHeroine(newHeroine.value); newHeroine.value='' ">
				
				<button (click)="addHeroine(newHeroine.value)">Add</button>
				<ul>
					<li *ngFor="let h of heroines">
						{{ h.id }}
						{{ h.name }}
					</li>
				</ul>`,
})
export class LittleTourComponent implements OnInit{
	//@Input('heroDetailInput') heroDetail: Hero;
	@Input('heroesArrInput') heroesDetailArr: Hero;

	heroines: Heroine[];
	className = 'Little Tour of Heroines';

	constructor(){
		this.heroines = [ new Heroine(1, 'Superwoman'),
			new Heroine(2, 'Supergirl'),
			new Heroine(3, 'Spider Woman'),
			new Heroine(4, 'Spider Girl'),
		];
	}

	ngOnInit(){
	}

	addHeroine(newHeroineName: string){
		if (newHeroineName){
			this.heroines.push(new Heroine(this.heroines.length+1, newHeroineName));
		} else {
			console.log("Empty String: " + newHeroineName);
		}
	}

}
