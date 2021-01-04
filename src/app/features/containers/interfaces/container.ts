export interface IContainer {
    id: string;
    schipId: string;
    gewicht: number;
    inhoud: string;
    startLocatie: string;
    eindLocatie: string;
}

export const IContainerInitialValue : IContainer = {
    id: '',
    schipId: '',
    gewicht: null,
    inhoud: '',
    startLocatie: '',
    eindLocatie: ''
};
