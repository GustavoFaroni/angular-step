import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';
import { Rotas } from './rotas/rotas';
import { PainelAdm } from './painel-adm/painel-adm';
import { Frete } from './frete/frete';

@NgModule({
  declarations: [App, Dashboard, Rotas, PainelAdm, Frete],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
