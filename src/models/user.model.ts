import { AnimalUser } from "./animaluser.model";
import { Deserializable } from "./deserializable.model";

export class User implements Deserializable {
  public _id: string;
  public pseudo: string;
  public level: number;
  public admin: boolean;
  public genre: string;
  public animals: AnimalUser[];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    Object.assign(this, input);

    // Iterate over all cars for our user and map them to a proper `Car` model
    this.animals = input.animals.map(animal => new AnimalUser().deserialize(animal));

    return this;
  }
};