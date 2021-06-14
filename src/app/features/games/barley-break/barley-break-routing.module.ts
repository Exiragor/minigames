import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarleyBreakComponent } from "./components/barley-break/barley-break.component";

const routes: Routes = [
  {
    path: '',
    component: BarleyBreakComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarleyBreakRoutingModule { }
