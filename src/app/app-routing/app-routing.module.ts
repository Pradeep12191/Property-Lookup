import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PropertyDashboardComponent } from '../property-dashboard/property-dashboard.component';
import { PropertyListingComponent } from '../property-listing/property-listing.component';
import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { PropertyListingDetailComponent } from '../property-listing-detail/property-listing-detail.component';


const routes:Routes = [
  {path: 'properties', component: PropertyListingComponent},
  {path: 'dashboard', component: PropertyDashboardComponent},
  {path: 'detail/:id', component: PropertyListingDetailComponent},
  {path:'', redirectTo: '/dashboard', pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
