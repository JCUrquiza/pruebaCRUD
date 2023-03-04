import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormService {

  resultados: any[] = [];

  constructor() { }

  guardarFormulario(formulario: any) {
    this.resultados.push(formulario);
  }

  obtenerResultados() {
    return this.resultados;
  }

  verResultados() {
    console.log(this.resultados);
  }

}
