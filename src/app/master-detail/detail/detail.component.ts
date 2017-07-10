import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';


@Component({
	selector: 'detail',
	template: `<div *ngIf="heroDetail; else showEmpty">
				<h3>Detail - DetailComponent</h3>
				<div><label>id: </label>{{ heroDetail.id }}</div>
				<div><label>name: </label>
					<input [(ngModel)]="heroDetail.name" placeholder="name">
				</div>
			</div>

			<ng-template #showEmpty>No hero selected</ng-template>`
})
export class DetailComponent implements OnInit{
	@Input('heroDetailInput') heroDetail: Hero; // From MasterComponent

	constructor(){
	}

	ngOnInit(){
	}

}
