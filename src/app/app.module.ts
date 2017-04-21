import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './UserInput/clickme/clickme.component';
import { Keyupv1Component } from './UserInput/keyupv1/keyupv1.component';
import { LoopbackComponent } from './UserInput/loopback/loopback.component';
import { LittleTourComponent } from './UserInput/little-tour/little-tour.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickMeComponent,
		Keyupv1Component,
		LoopbackComponent,
		LittleTourComponent,
		HeroDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
