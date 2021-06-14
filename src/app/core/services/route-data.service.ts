import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, mapTo, shareReplay } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {
  data$: Observable<Record<string, any>>;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.data$ = this._watchRouteData();
  }

  private _watchRouteData(): Observable<Record<string, any>> {
    return this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      mapTo(this._getRouteData()),
      shareReplay(1),
    );
  }

  private _getRouteData(): Record<string, any> {
    let child: ActivatedRoute | null = this._route;
    let data: Record<string, any> = {};

    while (child) {
      data = { ...data, ...child.snapshot.data };
      child = child.firstChild;
    }

    return data;
  }
}
