import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [],
  declarations: [ AppComponent, PropertyCardComponent,PropertyListComponent,NavBarComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }