export interface IShip {
    id: number;
    name: string;
    capaciteit: number;
    startLocatie: string;
    eindLocatie: string;
    rederijId: number;
}

export const IShipInitialValue : IShip = {
    id: 0,
    name: '',
    capaciteit: 0,
    startLocatie: '',
    eindLocatie: '',
    rederijId: 0
}
