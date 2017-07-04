import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyService } from './Services/property.service'
import { ErrorService } from './Services/error.service'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryProperties }  from './Services/in-memory-properties';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { PropertyListingDetailComponent } from './property-listing-detail/property-listing-detail.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertiesResolver } from './resolver/properties.resolver';
import { CommonService } from './Services/common.service'
import { LayoutComponent } from './layout/layout.component';

import { GlobalErrorHandler } from './error-handling';
import { PropertyAddFormComponent } from './property-add-form/property-add-form.component'


@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    PropertyDetailsComponent,
    PropertyDashboardComponent,
    PropertyListingDetailComponent,
    ErrorComponent,
    NotFoundComponent,
    LayoutComponent,
    PropertyAddFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProperties),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    PropertyService,
    PropertiesResolver,
    ErrorService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
