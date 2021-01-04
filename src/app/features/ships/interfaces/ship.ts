export interface IShip {
    id: string;
    naam: string;
    capaciteit: number;
    startLocatie: string;
    eindLocatie: string;
    rederijId: string;
}

export const IShipInitialValue : IShip = {
    id: '',
    naam: '',
    capaciteit: null,
    startLocatie: '',
    eindLocatie: '',
    rederijId: ''
}
