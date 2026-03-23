import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdm } from './painel-adm/painel-adm';
import { Maps } from './maps/maps';


const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'sobre', component: PainelAdm },
  { path: 'maps', component: Maps },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
