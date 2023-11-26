import { CharacterItem } from "src/models";
import { RequestMethods } from "utility/UtilityModule";

const BASE_PATH = "https://rickandmortyapi.com/api";
const CHARACTERS_PATH = `${BASE_PATH}/character`;

const defaultHeaders = {
  "content-type": "application/json;charset=UTF-8",
};

type CharactersResponse = {
  results: CharacterItem[];
};

/**
 * Performs a GET request to fetch a list of characters
 */
export async function getCharacters(): Promise<CharacterItem[]> {
  try {
    const response = await fetch(CHARACTERS_PATH, {
      method: RequestMethods.Get,
      headers: { ...defaultHeaders },
    });

    const { results }: CharactersResponse = await response.json();

    return results?.map(({ id, name, image, gender }) => ({
      id,
      name,
      image,
      gender,
    }));
  } catch (error) {
    throw error;
  }
}
