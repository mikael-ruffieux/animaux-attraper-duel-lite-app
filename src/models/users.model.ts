import { User } from "./user.model";
import { Deserializable } from "./deserializable.model";

export class Users implements Deserializable {
  public page: string;
  public pageSize: string;
  public total: number;
  public data: User[];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our animals to prevent already deserialized animals from being overwritten.
    Object.assign(this, input);
    return this;
  }
};