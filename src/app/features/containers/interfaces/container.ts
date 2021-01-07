export interface IContainer {
    id: number;
    serieCode: string;
    schipId: string;
    gewicht: number;
    inhoud: string;
    startLocatie: string;
    eindLocatie: string;
}

export const IContainerInitialValue : IContainer = {
    id: 0,
    serieCode: '',
    schipId: '',
    gewicht: null,
    inhoud: '',
    startLocatie: '',
    eindLocatie: ''
};
