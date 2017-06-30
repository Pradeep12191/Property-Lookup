import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyService } from './Services/property.service'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryProperties }  from './Services/in-memory-properties';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { PropertyListingDetailComponent } from './property-listing-detail/property-listing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    PropertyDetailsComponent,
    PropertyDashboardComponent,
    PropertyListingDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProperties),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
