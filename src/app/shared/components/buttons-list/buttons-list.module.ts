import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsListComponent } from "./buttons-list.component";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [ButtonsListComponent],
  exports: [
    ButtonsListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ButtonsListModule { }
