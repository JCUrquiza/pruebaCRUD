import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormLabel, InputLabel, Input, Button } from '@material-ui/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceFormService } from 'src/app/nucleo/services/service-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: ServiceFormService,
    private router: Router
  ) { 
    this.formulario = this.fb.group({
      identificador: ['', Validators.required],
      foto: [''],
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      puestoTrabajo: [''],
      salario: [''],
      estatus: [''],
      fechaContratacion: [''],
      fechaNacimiento: [''],
      parentesco: [''],
      sexo: ['']
    });
  }

  enviarFormulario() {
    this.formDataService.guardarFormulario(this.formulario.value);
    Swal.fire('Correcto', 'Empleado guardado correctamente', 'success');
    this.router.navigate(['/listarEmpleados']);
  }

}
