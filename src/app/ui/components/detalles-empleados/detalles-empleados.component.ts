import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-empleados',
  templateUrl: './detalles-empleados.component.html',
  styleUrls: ['./detalles-empleados.component.scss']
})
export class DetallesEmpleadosComponent {

    name: string = '';
    email: string = '';
    password: string = '';
    phone: string = '';
    address: string = '';

  
}
