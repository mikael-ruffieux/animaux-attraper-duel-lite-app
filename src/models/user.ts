import { AnimalUser } from "./animaluser";

export type User = {
    _id: string,
    pseudo: string;
    level: number;
    admin: boolean;
    genre: string;
    animals_link: string;
  };