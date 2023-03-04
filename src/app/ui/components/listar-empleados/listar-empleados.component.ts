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

  empleados: any[] = [];

  boolMostrarTabla: boolean = false;

  constructor(
    private router: Router,
    private formDataService: ServiceFormService
  ) {}

  ngOnInit() {

    const EMPLEADOS = this.formDataService.obtenerResultados();
    this.empleados = EMPLEADOS;

    if (this.empleados.length > 0) {
      this.boolMostrarTabla = true;
    } else {
      this.boolMostrarTabla = false;
    }

  }

  buttonIrACrearEmpleado() {
    console.log('crear empleado');
    this.router.navigate(['/crearEmpleado']);
  }

  buttonIrADetallesEmpleado(id: string) {
    console.log(id);
    this.router.navigate(['/detallesEmpleados/', id]);
  }

  verFormulario() {
    this.formDataService.verResultados();
  }

}
