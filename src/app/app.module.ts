import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './user-input/clickme/clickme.component';
import { KeyupComponent } from './user-input/keyup/keyup.component';
import { LoopbackComponent } from './user-input/loopback/loopback.component';
import { LittleTourComponent } from './user-input/little-tour/little-tour.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from "./hero.service";
import { GetComponentPropertyComponent } from './simple-eg/get-component-property/get-component-property.component';
import { ForloopEgComponent } from './simple-eg/forloop-eg/forloop-eg.component';
import { BindPropertyComponent } from './simple-eg/bind-property/bind-property.component';
import { MasterComponent } from './master-detail/master/master.component';
import { DetailComponent } from './master-detail/detail/detail.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickMeComponent,
		KeyupComponent,
		LoopbackComponent,
		LittleTourComponent,
		HeroDetailComponent,
		HeroesComponent,
		GetComponentPropertyComponent,
		ForloopEgComponent,
		BindPropertyComponent,
		MasterComponent,
		DetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{
				path: 'HerosList',
				component: HeroesComponent
			},
			{
				path: 'GetComponentProperty',
				component: GetComponentPropertyComponent
			},
			{
				path: 'DoForLoop',
				component: ForloopEgComponent
			},
			{
				path: 'DoDataBind',
				component: BindPropertyComponent
			},
			{
				path: 'ClickMe',
				component: ClickMeComponent
			},
			{
				path: 'KeyupAnyEvent',
				component: KeyupComponent
			},
			{
				path: 'LoopBack',
				component: LoopbackComponent
			},
			{
				path: 'LittleTour',
				component: LittleTourComponent
			},
			{
				path: 'Master-Detail',
				component: MasterComponent
			}
		])
	],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
