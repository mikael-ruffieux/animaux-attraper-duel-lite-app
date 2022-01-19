import { Deserializable } from "./deserializable.model";

export class AnimalUser implements Deserializable {
    public id: number;
    public type: string;
    public name: string;
    public level: number;
    public hp: number;
    public attack: number;
    public picture: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}