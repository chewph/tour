import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';


@Component({
	selector: 'detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.css' ]
})
export class DetailComponent implements OnInit{
	@Input('heroesArrInput') heroesDetailArr: Hero;
	@Input('heroDetailInput') heroDetail: Hero;

	constructor(){
	}

	ngOnInit(){
	}

}
