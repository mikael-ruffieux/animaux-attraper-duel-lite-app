import { Deserializable } from "./deserializable.model";

export class Animal implements Deserializable {
    public _id: string;
    public type: string; 
    public hp_default: number;
    public hp_variation: number;
    public attack_default: number;
    public attack_variation: number;
    public level_default: number;
    public level_variation: number;
    public class: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}