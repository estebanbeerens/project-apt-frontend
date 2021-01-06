export interface IContainer {
    id: number;
    schipId: string;
    gewicht: number;
    inhoud: string;
    startLocatie: string;
    eindLocatie: string;
}

export const IContainerInitialValue : IContainer = {
    id: 0,
    schipId: '',
    gewicht: null,
    inhoud: '',
    startLocatie: '',
    eindLocatie: ''
};
