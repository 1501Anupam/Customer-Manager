import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MatSort } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderPlacedComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    MatSort,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8MRJJQmhs4emzywu-MTiWScxxamNlRSo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
