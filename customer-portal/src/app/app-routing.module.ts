import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';


const routes: Routes = [
  { path:'address', component:  AddressComponent},
  { path:'reactive', component:  ReactiveApproachComponent},
  { path:'list', component: ListViewComponent },
  { path:'map', component: MapViewComponent },
  { path:'card', component: CardViewComponent },
  { path:'order', component: OrderPlacedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
