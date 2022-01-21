import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { ErrorBusquedaComponent } from './componentes/error-busqueda/error-busqueda.component';
import { ModeloComponent } from './modelo/modelo/modelo.component';
import { PokemonComponent } from './modelo/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    DescripcionComponent,
    ErrorBusquedaComponent,
    ModeloComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
