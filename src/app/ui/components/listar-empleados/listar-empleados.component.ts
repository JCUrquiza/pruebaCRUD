import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFormService } from 'src/app/nucleo/services/service-form.service';
import { EmpleadoInterface } from 'src/app/nucleo/interfaces/empleado.interface';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.scss']
})
export class ListarEmpleadosComponent {

  constructor(
    private router: Router,
    private formDataService: ServiceFormService
  ) {}

  ngOnInit() {

    const EMPLEADOS = this.formDataService.obtenerResultados();
    console.log(EMPLEADOS);

  }

  buttonIrACrearEmpleado() {
    console.log('crear empleado');
    this.router.navigate(['/crearEmpleado']);
  }

  verFormulario() {
    this.formDataService.verResultados();
  }

}
