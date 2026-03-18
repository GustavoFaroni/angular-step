import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';
import { Rotas } from './rotas/rotas';
import { PainelAdm } from './painel-adm/painel-adm';
import { Frete } from './frete/frete';
import { Card } from './card/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TablePeople } from './table-people/table-people';
import { MatTableModule } from '@angular/material/table';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@NgModule({
  declarations: [App, Dashboard, Rotas, PainelAdm, Frete, Card, TablePeople],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatCardModule, MatTab, MatTabGroup, MatButtonModule, MatTableModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
