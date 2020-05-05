
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesAddEditComponent } from './clientes-add-edit/clientes-add-edit.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcasAddEditComponent } from './marcas-add-edit/marcas-add-edit.component';
import { TipoBebidasComponent } from './tipo-bebidas/tipo-bebidas.component';
import { TipoBebidasAddEditComponent } from './tipo-bebidas-add-edit/tipo-bebidas-add-edit.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { BebidasAddEditComponent } from './bebidas-add-edit/bebidas-add-edit.component';
import { BebidasEstoqueComponent } from './bebidas-estoque/bebidas-estoque.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasAddEditComponent } from './vendas-add-edit/vendas-add-edit.component';
import { VendasCreateComponent } from './vendas-create/vendas-create.component';



const routes: Routes = [
  { path: 'clientes/lista', component: ClientesComponent, pathMatch: 'full' },
  { path: 'clientes/edit/:id', component: ClientesAddEditComponent },
  { path: 'clientes/add', component: ClientesAddEditComponent },
  { path: 'marcas/lista', component: MarcasComponent},
  { path: 'marcas/edit/:id', component: MarcasAddEditComponent },
  { path: 'marcas/add', component: MarcasAddEditComponent },
  { path: 'tipobebidas/lista', component: TipoBebidasComponent },
  { path: 'tipobebidas/edit/:id', component: TipoBebidasAddEditComponent },
  { path: 'tipobebidas/add', component: TipoBebidasAddEditComponent },
  { path: 'bebidas/lista', component: BebidasComponent },
  { path: 'bebidas/edit/:id', component: BebidasAddEditComponent },
  { path: 'bebidas/add', component: BebidasAddEditComponent },
  { path: 'bebidas/addremove/:id', component: BebidasEstoqueComponent },
  { path: 'vendas/lista', component: VendasComponent },
  { path: 'vendas/create', component: VendasCreateComponent },
  { path: 'vendas/addremove/:id', component: VendasAddEditComponent },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
