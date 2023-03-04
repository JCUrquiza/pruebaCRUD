import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoInterface } from 'src/app/nucleo/interfaces/empleado.interface';
import { ServiceFormService } from 'src/app/nucleo/services/service-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-empleados',
  templateUrl: './detalles-empleados.component.html',
  styleUrls: ['./detalles-empleados.component.scss']
})
export class DetallesEmpleadosComponent {

  formulario!: FormGroup;
  id: any = '';
  empleados: EmpleadoInterface[] = [];
  empleadoEncontrado: EmpleadoInterface[] = [];
  empleadosEliminar: any;

  constructor(
    private fb: FormBuilder,
    private formDataService: ServiceFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empleados = this.formDataService.obtenerResultados();
    this.datosFormulario();
  }

  datosFormulario() {
    this.empleadoEncontrado = this.empleados.filter(empleado => empleado.identificador === this.id);
    this.formulario = this.fb.group({
      identificador: [this.empleadoEncontrado[0].identificador , Validators.required],
      foto: [this.empleadoEncontrado[0].foto],
      nombre: [this.empleadoEncontrado[0].nombre, Validators.required],
      apellidoPaterno: [this.empleadoEncontrado[0].apellidoPaterno, Validators.required],
      apellidoMaterno: [this.empleadoEncontrado[0].apellidoMaterno, Validators.required],
      puestoTrabajo: [this.empleadoEncontrado[0].puestoTrabajo],
      salario: [this.empleadoEncontrado[0].salario],
      estatus: [this.empleadoEncontrado[0].estatus],
      fechaContratacion: [this.empleadoEncontrado[0].fechaContratacion],
      fechaNacimiento: [this.empleadoEncontrado[0].fechaNacimiento],
      parentesco: [this.empleadoEncontrado[0].parentesco],
      sexo: [this.empleadoEncontrado[0].sexo]
    });
  }

  actualizarEmpleado() {

    const empleado = this.empleadoEncontrado[0];
    const formulario = this.formulario.value;

    empleado.identificador = formulario.identificador;
    empleado.nombre = formulario.nombre;
    empleado.apellidoPaterno = formulario.apellidoPaterno;
    empleado.apellidoMaterno = formulario.apellidoMaterno;
    empleado.puestoTrabajo = formulario.puestoTrabajo;
    empleado.salario = formulario.salario;
    empleado.estatus = formulario.estatus;
    empleado.fechaContratacion = formulario.fechaContratacion;
    empleado.fechaNacimiento = formulario.fechaNacimiento;
    empleado.parentesco = formulario.parentesco;
    empleado.sexo = formulario.sexo;

    Swal.fire('Correcto', 'Empleado actualizado correctamente', 'success');
    this.router.navigate(['/listarEmpleados']);
  }
  
  eliminarEmpleado() {

    Swal.fire({
      title: '¡Atención!',
      text: "¿Estás seguro de eliminar este empleado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar acción'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El empleado ha sido eliminado',
          'success'
        )
        this.empleadosEliminar = this.empleados.findIndex(empleado => empleado.identificador === this.id);
        this.empleados.splice(this.empleadosEliminar, 1);
    
        this.router.navigate(['/listarEmpleados']);
      }
    })
    
  }
  
}
