import { Routes } from '@angular/router';
import { DetallesEmpleadosComponent } from './ui/components/detalles-empleados/detalles-empleados.component';
import { ListarEmpleadosComponent } from './ui/components/listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './ui/components/crear-empleado/crear-empleado.component';

export const ROUTES: Routes = [
    { path: 'listarEmpleados', component: ListarEmpleadosComponent },
    { path: 'crearEmpleado', component: CrearEmpleadoComponent },
    { path: 'detallesEmpleados/:id', component: DetallesEmpleadosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'listarEmpleados' },
    { path: '**', pathMatch: 'full', redirectTo: 'listarEmpleados' },
];


