export interface IShipyard {
    id: number;
    naam: string;
    mail: string;
    telefoon: string;
    postcode: string;
    gemeente: string;
}

export const IShipyardInitialValue : IShipyard = {
    id: 0,
    naam: '',
    mail: '',
    telefoon: '',
    postcode: '',
    gemeente: ''
};
