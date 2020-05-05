import { BebidaService } from './services/bebida.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesAddEditComponent } from './clientes-add-edit/clientes-add-edit.component';
import { ClienteService } from './services/cliente.service';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcasAddEditComponent } from './marcas-add-edit/marcas-add-edit.component';
import { MarcaService } from './services/marca.service';
import { TipoBebidasComponent } from './tipo-bebidas/tipo-bebidas.component';
import { TipoBebidasAddEditComponent } from './tipo-bebidas-add-edit/tipo-bebidas-add-edit.component';
import { TipoBebidaService } from './services/tipo-bebida.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { SidenavFixedExampleComponent } from './sidenav-fixed-example/sidenav-fixed-example.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { BebidasAddEditComponent } from './bebidas-add-edit/bebidas-add-edit.component';
import { BebidasEstoqueComponent } from './bebidas-estoque/bebidas-estoque.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasAddEditComponent } from './vendas-add-edit/vendas-add-edit.component';
import { VendasCreateComponent } from './vendas-create/vendas-create.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClientesAddEditComponent,
    MarcasComponent,
    MarcasAddEditComponent,
    TipoBebidasComponent,
    TipoBebidasAddEditComponent,
    SidenavFixedExampleComponent,
    BebidasComponent,
    BebidasAddEditComponent,
    BebidasEstoqueComponent,
    VendasComponent,
    VendasAddEditComponent,
    VendasCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    BrowserModule,



  ],
  providers: [ClienteService, MarcaService, TipoBebidaService, BebidaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
