import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFormService } from 'src/app/nucleo/services/service-form.service';
import { EmpleadoInterface } from 'src/app/nucleo/interfaces/empleado.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.scss']
})
export class ListarEmpleadosComponent {

  empleados: EmpleadoInterface[] = [];

  boolMostrarTabla: boolean = false;

  constructor(
    private router: Router,
    private formDataService: ServiceFormService
  ) {}

  ngOnInit() {

    // const EMPLEADOS = this.formDataService.obtenerResultados();
    this.formDataService.listarTodosEmpleados().subscribe( (res) => {
      console.log(res);
      for (const empleado of res) {
        //this.empleados = res;
        this.empleados.push({
          id: empleado.id,
          foto: empleado.foto,
          nombre: empleado.nombre,
          aPaterno: empleado.aPaterno,
          aMaterno: empleado.aMaterno,
          puestoTrab: empleado.puestoTrab,
          salario: empleado.salario,
          estatus: empleado.estatus,
          fechaContratacion: empleado.fechaContratacion,
          fechaNacimiento: empleado.fechaNacimiento,
          parentesco: empleado.parentesco,
          sexo: empleado.sexo
        });
      }
      console.log(this.empleados);

      if (this.empleados.length > 0) {
        this.boolMostrarTabla = true;
      } else {
        this.boolMostrarTabla = false;
      }
    });

  }

  buttonIrACrearEmpleado() {
    this.router.navigate(['/crearEmpleado']);
  }

  buttonIrADetallesEmpleado(id: string) {
    this.router.navigate(['/detallesEmpleados/', id]);
  }

  verFormulario() {
    this.formDataService.verResultados();
  }

  eliminarTodosEmpleados() {
    this.formDataService.eliminarTodosEmpleados().subscribe( res => {
      console.log(res);
      this.boolMostrarTabla = false;
      Swal.fire('Correcto', 'Empleados eliminados correctamente', 'success');
    })
  }

}
