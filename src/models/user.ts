import { AnimalUser } from "./animaluser";

export type User = {
    pseudo: string;
    level: number;
    admin: boolean;
    animals: AnimalUser[];
  };