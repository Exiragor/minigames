import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class CoreModule { }
