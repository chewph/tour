import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { LoggerService } from '../../logger/logger.service';
import { Optional } from '@angular/core';

@Component({
	selector: 'hero-form',
	templateUrl: './hero-form.component.html',
})
export class HeroFormComponent implements OnInit{

	constructor(@Optional() private logger: LoggerService){
	}

	ngOnInit(){
	}

	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

	submitted = false;

	onSubmit() {
		this.submitted = true;
		this.logger.log("onSubmitted");
	}

	newHero() {
		this.model = new Hero(42, '', '');
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}



}
