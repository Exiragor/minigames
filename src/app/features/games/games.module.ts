import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './components/games/games.component';
import { ButtonsListModule } from "@shared/components/buttons-list/buttons-list.module";


@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ButtonsListModule
  ]
})
export class GamesModule { }
