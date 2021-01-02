export interface IShipyard {
    id: number;
    name: string;
    capaciteit: number;
    startLocatie: string;
    eindLocatie: string;
    rederijId: number;
}

export const IShipyardInitialValue : IShipyard = {
    id: 0,
    name: '',
    capaciteit: 0,
    startLocatie: '',
    eindLocatie: '',
    rederijId: 0
}
