import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdm } from './painel-adm/painel-adm';


const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'sobre', component: PainelAdm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
