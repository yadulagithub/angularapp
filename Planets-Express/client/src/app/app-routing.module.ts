import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetNewComponent } from './planet-new/planet-new.component';
import { PlanetEditComponent } from './planet-edit/planet-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: PlanetListComponent},
  {path: 'new', component: PlanetNewComponent},
  {path: 'edit/:_id',  component: PlanetEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
