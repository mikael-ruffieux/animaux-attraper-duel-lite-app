export type WsMessageStart = {
    type: string;
    pseudo: string;
    animalID: number;
};

export type WsMessagePlay = {
    type: string;
};