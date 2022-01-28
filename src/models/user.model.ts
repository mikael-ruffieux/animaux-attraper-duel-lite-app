import { AnimalUser } from "./animaluser.model";
import { AnimalUserService } from "@app/services/animaluser.service";
import { Deserializable } from "./deserializable.model";

export class User implements Deserializable {
  public _id: string;
  public pseudo: string;
  public level: number;
  public admin: boolean;
  public genre: string;
  public animals: AnimalUser[];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our animals to prevent already deserialized animals from being overwritten.
    return Object.assign(this, input);
  }
};