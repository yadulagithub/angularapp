import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PetListComponent } from './pet-list/pet-list.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';



@NgModule({
  declarations: [ AppComponent, PetListComponent, PetNewComponent, PetEditComponent, PetDetailComponent ],
  imports: [ BrowserModule, HttpClientModule, FormsModule, AppRoutingModule ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
