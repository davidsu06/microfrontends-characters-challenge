export enum CharacterGender {
  Male = "Male",
  Female = "Female",
  Unknown = "unknown",
}

export type CharacterItem = {
  id: number;
  name: string;
  image: string;
  gender: CharacterGender;
};
