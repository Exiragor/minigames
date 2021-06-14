import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarleyBreakRoutingModule } from './barley-break-routing.module';
import { BarleyBreakComponent } from './components/barley-break/barley-break.component';


@NgModule({
  declarations: [
    BarleyBreakComponent
  ],
  imports: [
    CommonModule,
    BarleyBreakRoutingModule
  ]
})
export class BarleyBreakModule { }
