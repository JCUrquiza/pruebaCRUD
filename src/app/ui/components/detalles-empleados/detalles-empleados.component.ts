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
export class DetallesEmpleadosComponent implements OnInit {

  formulario!: FormGroup;
  
  id: any;
  empleados: any[] = [];
  empleadosEliminar: any;

  constructor(
    private fb: FormBuilder,
    private formDataService: ServiceFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerEmpleado();
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

  obtenerEmpleado() {
    this.formDataService.detallesEmpleado(this.id).subscribe( (res: EmpleadoInterface) => {
      console.log(res);
      this.empleados.push(res);
      this.datosFormulario(res);
      // console.log(this.empleados);
      // console.log(typeof(this.empleados));
    })
    // this.empleados = this.formDataService.obtenerResultados();
  }
  
  datosFormulario(res: EmpleadoInterface) {
    
    const fechaC = new Date(res.fechaContratacion);
    const diaC = fechaC.getUTCDate().toString().padStart(2, '0');
    const mesC = (fechaC.getUTCMonth() + 1).toString().padStart(2, '0');
    const anioC = fechaC.getUTCFullYear();
    const fechaContratacion = `${mesC}/${diaC}/${anioC}`;
    
    const fechaN = new Date(res.fechaNacimiento);
    const diaN = fechaN.getUTCDate().toString().padStart(2, '0');
    const mesN = (fechaN.getUTCMonth() + 1).toString().padStart(2, '0');
    const anioN = fechaN.getUTCFullYear();
    const fechaNacimieto = `${mesN}/${diaN}/${anioN}`;
    

    this.formulario.get('identificador')?.setValue(res.id);
    this.formulario.get('foto')?.setValue(res.foto);
    this.formulario.get('nombre')?.setValue(res.nombre);
    this.formulario.get('apellidoPaterno')?.setValue(res.aPaterno);
    this.formulario.get('apellidoMaterno')?.setValue(res.aMaterno);
    this.formulario.get('puestoTrabajo')?.setValue(res.puestoTrab);
    this.formulario.get('salario')?.setValue(res.salario);
    this.formulario.get('estatus')?.setValue(res.estatus);
    this.formulario.get('fechaContratacion')?.setValue(fechaContratacion);
    this.formulario.get('fechaNacimiento')?.setValue(fechaNacimieto);
    this.formulario.get('parentesco')?.setValue(res.parentesco);
    this.formulario.get('sexo')?.setValue(res.sexo);
    console.log(this.formulario.value);
  }

  actualizarEmpleado() {

    const formulario = this.formulario.value;
    
    const BODY = {
      "id": this.id,
      "foto": formulario.foto, 
      "nombre": formulario.nombre,
      "aPaterno": formulario.apellidoPaterno, 
      "aMaterno": formulario.apellidoMaterno,
      "puestoTrab": formulario.puestoTrabajo,
      "salario": formulario.salario,
      "estatus": formulario.estatus, 
      "fechaContratacion": formulario.fechaContratacion,
      "fechaNacimiento": formulario.fechaNacimiento,
      "parentesco": formulario.parentesco,
      "sexo": formulario.sexo
    }
    this.formDataService.editarEmpleado(BODY, this.id).subscribe( res  => {
      console.log(res);
      Swal.fire('Correcto', 'Empleado actualizado  correctamente', 'success');
      this.router.navigate(['/listarEmpleados']);
    })
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
        this.formDataService.eliminarEmpleado(this.id).subscribe( res => {
          console.log(res);
        });
    
        this.router.navigate(['/listarEmpleados']);
      }

    })
    
  }
  
}
