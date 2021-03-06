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
import { ShowHideComponent } from './simple-eg/show-hide/show-hide.component';
import { ScrollToComponent } from './simple-eg/scroll-to/scroll-to.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { ExamplesMenuComponent } from './examples-menu/examples-menu.component';
import { ChildRouteComponent } from './simple-eg/child-route/child-route.component';
import { ChildoneComponent } from './simple-eg/child-route/childone/childone.component';
import { ChildtwoComponent } from './simple-eg/child-route/childtwo/childtwo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroFormComponent } from './user-input/hero-form/hero-form.component';
import { LoggerService } from "./logger/logger.service";
import { HeroDetailEventBindingComponent } from './hero-detail/hero-detail-event-binding/hero-detail-event-binding.component';
import { BigHeroDetailComponent } from './hero-detail/hero-detail-event-binding/big-hero-detail.component';
import { HighlightDirective } from './simple-eg/hightlight-directive/highlight.directive';
import { ParentComponent } from './simple-eg/input-output/parent.component';
import { ChildComponent } from './simple-eg/input-output/child.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HeroListComponent } from './http-client/hero-list.component';

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
		DetailComponent,
		ShowHideComponent,
		ScrollToComponent,
		ExamplesMenuComponent,
		ChildRouteComponent,
		ChildoneComponent,
		ChildtwoComponent,
		DashboardComponent,
		HeroFormComponent,
		HeroDetailEventBindingComponent,
		BigHeroDetailComponent,
		HighlightDirective,
		ParentComponent,
		ChildComponent,
		HttpClientComponent,
		HeroListComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ScrollToModule.forRoot(),
		AppRoutingModule // routing CONST containing all routes to application
	],

	/*
	 You can either register a provider within an NgModule or in application components.
	 Singleton HeroService instance, available to all components of the app
	 */
	providers: [ HeroService, LoggerService ],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}

/*
 const routes: Routes = [
 // basic routes
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'contactus', redirectTo: 'contact' },

 // authentication demo
 { path: 'login', component: LoginComponent },
 {
 path: 'protected',
 component: ProtectedComponent,
 canActivate: [ LoggedInGuard ]
 },

 // nested
 {
 path: 'products',
 component: ProductsComponent,
 children: childRoutes
 }
 ];
 */
