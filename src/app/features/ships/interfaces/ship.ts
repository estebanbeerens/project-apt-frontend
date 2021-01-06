export interface IShip {
    id: number;
    naam: string;
    capaciteit: number;
    startLocatie: string;
    eindLocatie: string;
    rederijId: string;
}

export const IShipInitialValue : IShip = {
    id: 0,
    naam: '',
    capaciteit: null,
    startLocatie: '',
    eindLocatie: '',
    rederijId: ''
}
