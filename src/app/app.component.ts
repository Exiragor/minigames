import { Component } from '@angular/core';
import { RouteDataService } from "@core/services/route-data.service";
import { Observable } from "rxjs";
import { TLayout } from "@core/models/layouts.model";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  layout$: Observable<TLayout>

  constructor(private _routeDataService: RouteDataService) {
    this.layout$ = this._routeDataService.data$.pipe(map(({layout}) => layout));
  }
}
