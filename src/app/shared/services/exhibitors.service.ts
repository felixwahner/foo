import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FavoritesService } from './favorites.service';
import { Exhibitor } from '../models/exhibitor';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ExhibitorsService {
  constructor(
    private http: HttpClient,
    private favoritesService: FavoritesService,
  ) {}

  private getJson(): Observable<Array<Exhibitor>> {
    return this.http.get<Array<Exhibitor>>('/assets/data/exhibitors.json');
  }
  public get(): Observable<Array<Exhibitor>> {
    return combineLatest(
      this.getJson(),
      this.favoritesService.currentFavorites$,
    ).pipe(
      map(([exhibitors, favorites]) =>
        exhibitors.map((exhibitor) =>
          (favorites as Array<string>).includes(exhibitor.id)
            ? { ...exhibitor, isFavorite: true }
            : exhibitor,
        ),
      ),
    );
  }
}
