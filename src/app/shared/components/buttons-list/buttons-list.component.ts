import { Component, Input, OnInit } from '@angular/core';
import { ILink } from "@core/models/link.model";

@Component({
  selector: 'app-buttons-list',
  templateUrl: './buttons-list.component.html',
  styleUrls: ['./buttons-list.component.scss']
})
export class ButtonsListComponent {
  @Input() items: ILink[] = [];
}
