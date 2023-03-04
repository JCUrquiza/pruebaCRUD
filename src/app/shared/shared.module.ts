import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

// Prime NG
import { MenubarModule } from 'primeng/menubar';

const COMPONENTS = [NavbarComponent];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class SharedModule { }


