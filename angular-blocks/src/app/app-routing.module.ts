import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component'

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'alpha',  component: AlphaComponent},
    {path: 'beta',  component: BetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
