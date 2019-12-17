import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetNewComponent } from './planet-new/planet-new.component';
import { PlanetEditComponent } from './planet-edit/planet-edit.component';

@NgModule({
  declarations: [ AppComponent, PlanetListComponent, PlanetNewComponent, PlanetEditComponent ],
  imports: [ BrowserModule, HttpClientModule, FormsModule, AppRoutingModule ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
