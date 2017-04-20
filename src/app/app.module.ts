import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickmeComponent } from './UserInput/clickme/clickme.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickmeComponent
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
