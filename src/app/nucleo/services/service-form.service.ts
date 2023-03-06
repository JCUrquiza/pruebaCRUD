import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmpleadoInterface } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormService {

  resultados: any[] = [];

  constructor( private http: HttpClient ) { }

  guardarFormulario(formulario: any) {
    this.resultados.push(formulario);
  }

  obtenerResultados() {
    return this.resultados;
  }
  
  verResultados() {
    return this.resultados;
  }

  guardarEmpleado(body: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/empleado', body);
  }

  listarTodosEmpleados(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/empleados');
  }

  editarEmpleado(BODY: any, id: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/empleado/` + id, BODY);
  }

  detallesEmpleado(id: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/empleado/detalles/` + id, id);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/empleado/` + id);
  }

  eliminarTodosEmpleados(): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/empleados/eliminar/todos');
  }

}
