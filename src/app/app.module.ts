import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
