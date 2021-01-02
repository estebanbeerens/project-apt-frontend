export interface IContainer {
    id: number;
    schipId: number;
    gewicht: number;
    inhoud: string;
    startLocatie: string;
    eindLocatie: string;
}

export const IContainerInitialValue : IContainer = {
    id: 0,
    schipId: 0,
    gewicht: 0,
    inhoud: '',
    startLocatie: '',
    eindLocatie: ''
};
