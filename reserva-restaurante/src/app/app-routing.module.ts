import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  { path: 'cliente', loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'funcionario', loadChildren: () => import('./pages/funcionario/funcionario.module').then(m => m.FuncionarioModule) },
  { path: 'mesa', loadChildren: () => import('./pages/mesa/mesa.module').then(m => m.MesaModule) },
  { path: 'pedido', loadChildren: () => import('./pages/pedido/pedido.module').then(m => m.PedidoModule) },
  { path: 'reserva', loadChildren: () => import('./pages/reserva/reserva.module').then(m => m.ReservaModule) },
  { path: 'restaurante', loadChildren: () => import('./pages/restaurante/restaurante.module').then(m => m.RestauranteModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
