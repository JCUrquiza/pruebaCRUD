import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpleadosComponent } from './ui/components/listar-empleados/listar-empleados.component';
import { DetallesEmpleadosComponent } from './ui/components/detalles-empleados/detalles-empleados.component';

// Importar rutas
import { ROUTES } from './app.routes';

// Modulos
import { SharedModule } from './shared/shared.module';
import { UiModule } from './ui/ui.module';
import { CrearEmpleadoComponent } from './ui/components/crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadosComponent,
    DetallesEmpleadosComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UiModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
