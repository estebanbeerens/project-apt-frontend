import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IShip as IObject, IShipInitialValue as IObjectInitialValue } from "src/app/features/ships/interfaces/ship";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ShipsService {

    baseUrl = environment.apiUrl;

    isLoading$ = new BehaviorSubject(false);

    overview$ = new BehaviorSubject<IObject[]>([]);
    details$ = new BehaviorSubject<IObject>(IObjectInitialValue);

    constructor(private http: HttpClient) {}

    private _loaderInit() {
        this.isLoading$.next(true);
    }
    
    private _loaderStop() {
        this.isLoading$.next(false);
    }

    loadOverview() {
        this._loaderInit();
        this.http.get<IObject[]>(`${this.baseUrl}/all`).subscribe((response) => {
            this.overview$.next(response);
            this._loaderStop();
        });
    }

    loadDetails(id: number) {
        this._loaderInit();
        this.http.get<IObject>(`${this.baseUrl}/${id}`).subscribe((response) => {
            this.details$.next(response);
            this._loaderStop();
        });
    }

    create(body: any) {
        this.http.post<IObject>(`${this.baseUrl}`, body).subscribe((response) => {
            this.overview$.next([...this.overview$.value, response]);
        });
    }

    update(id: string, body) {
        this.http.put<IObject>(`${this.baseUrl}/${id}`, body).subscribe((response) => {
            this.details$.next(response);
            this.overview$.next(this.overview$.value.map((ship) => {
              if (ship.id == response.id) {
                ship = response;
              }
              return ship;
            }));
        });
    }
  
    delete(id: string) {
        this.http.delete<IObject>(`${this.baseUrl}/${id}`).subscribe((response) => {
            this.overview$.next(
                this.overview$.value.filter((ship) => ship.id != response.id)
            );
        });
    }
}