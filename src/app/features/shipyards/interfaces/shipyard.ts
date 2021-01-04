export interface IShipyard {
    id: string;
    naam: string;
    mail: string;
    telefoon: string;
    postcode: string;
    gemeente: string;
}

export const IShipyardInitialValue : IShipyard = {
    id: '',
    naam: '',
    mail: '',
    telefoon: '',
    postcode: '',
    gemeente: ''
};
