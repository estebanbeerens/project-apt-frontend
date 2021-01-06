import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IShip as IObject, IShip, IShipInitialValue as IObjectInitialValue } from "src/app/features/ships/interfaces/ship";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ShipsService {

    baseUrl = environment.apiUrl + '/schepen';

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

    loadDetails(id: string) {
        this._loaderInit();
        this.http.get<IObject>(`${this.baseUrl}/${id}`).subscribe((response) => {
            this.details$.next(response["schip"]);
            this._loaderStop();
        });
    }

    resetDetails() {
        this.details$.next(IObjectInitialValue);
    }

    create(body: IShip) {
        this.http.post<IObject>(`${this.baseUrl}/insert`, body).subscribe((response) => {
            this.overview$.next([...this.overview$.value, response]);
        });
    }

    update(id: number, body: IShip) {
        this.http.put<IObject>(`${this.baseUrl}/update`, body).subscribe((response) => {
            this.details$.next(response);
            this.overview$.next(this.overview$.value.map((ship) => {
              if (ship.id == response.id) {
                ship = response;
              }
              return ship;
            }));
        });
    }
  
    delete(id: number) {
        this.http.delete<IObject>(`${this.baseUrl}/delete/${id}`).subscribe((response) => {
            this.overview$.next(
                this.overview$.value.filter((ship) => ship.id != id)
            );
        });
    }
}