import { Component } from '@angular/core';
import { ILink } from "@core/models/link.model";
import { DEFAULT_GAMES } from "./games.utils";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  games: ILink[] = DEFAULT_GAMES;
}
