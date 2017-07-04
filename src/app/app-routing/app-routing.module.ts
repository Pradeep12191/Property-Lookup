import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PropertyDashboardComponent } from '../property-dashboard/property-dashboard.component';
import { PropertyListingComponent } from '../property-listing/property-listing.component';
import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { PropertyListingDetailComponent } from '../property-listing-detail/property-listing-detail.component';
import { PropertiesResolver } from '../resolver/properties.resolver'

import { NotFoundComponent } from '../not-found/not-found.component';
import { ErrorComponent } from '../error/error.component';
import { LayoutComponent } from '../layout/layout.component';


const routes:Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:PropertyDashboardComponent,
      },
      {
        path: 'properties',
        component: PropertyListingComponent,
        resolve:{
          properties: PropertiesResolver
        }
      },
      {
        path: 'detail/:id',
        component: PropertyListingDetailComponent
      },
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'**',
    component:NotFoundComponent
  },
  {
    path:'error',
    component: ErrorComponent
  }
  // {
  //   path: 'properties',
  //   component: PropertyListingComponent,
  //   resolve:{
  //     properties: PropertiesResolver
  //   }
  // },
  // {path:'**', component:NotFoundComponent},
  // {path: 'dashboard', component: PropertyDashboardComponent},
  // {path: 'detail/:id', component: PropertyListingDetailComponent},
  // {path:'', redirectTo: '/dashboard', pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
