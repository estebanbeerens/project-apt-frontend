import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IShipyard as IObject, IShipyard, IShipyardInitialValue as IObjectInitialValue } from "src/app/features/shipyards/interfaces/shipyard";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ShipyardsService {

    baseUrl = environment.apiUrl + '/rederijen';

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
            this.details$.next(response["rederij"]);
            this._loaderStop();
        });
    }

    resetDetails() {
        this.details$.next(IObjectInitialValue);
    }

    create(body: IShipyard) {
        this.http.post<IObject>(`${this.baseUrl}/insert`, body).subscribe((response) => {
            this.overview$.next([...this.overview$.value, response]);
        });
    }

    update(id: string, body: IShipyard) {
        this.http.put<IObject>(`${this.baseUrl}/update`, body).subscribe((response) => {
            this.loadOverview();
        });
    }
  
    delete(id: string) {
        this.http.delete<IObject>(`${this.baseUrl}/delete/${id}`).subscribe((response) => {
            this.overview$.next(
                this.overview$.value.filter((shipyard) => shipyard.id != id)
            );
        });
    }
}