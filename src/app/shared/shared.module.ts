import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

// Prime NG
import { MenubarModule } from 'primeng/menubar';
import { SpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [NavbarComponent, SpinnerComponent];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class SharedModule { }


