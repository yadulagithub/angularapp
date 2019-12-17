import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: PetListComponent},
  {path: 'new', component: PetNewComponent},
  {path: 'edit/:_id',  component: PetEditComponent},
  {path: 'detail/:_id',  component: PetDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

