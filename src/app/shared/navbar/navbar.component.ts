import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  darkMode = false;

  items: MenuItem[] = [];


  ngOnInit() {

    this.items = [
      {
        label: 'KSP - Evaluación Técnica'
      },
      {
        label: 'Listado de empleados',
        icon: 'pi pi-fw pi-book',
        // items: [],
        routerLink: '/listarEmpleados'
      }
    ];

  }

}
