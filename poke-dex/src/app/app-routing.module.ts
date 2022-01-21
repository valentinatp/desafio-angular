import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { ErrorBusquedaComponent } from './componentes/error-busqueda/error-busqueda.component';

const routes: Routes = [
   {path: '', component: DashboardComponent},
   {path: 'descripcion', component: DescripcionComponent},
   {path: '**', component: ErrorBusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
