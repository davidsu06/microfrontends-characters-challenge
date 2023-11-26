import { CharacterItem } from "src/models";
import { RequestMethods } from "utility/UtilityModule";

const BASE_PATH = "https://api.disneyapi.dev";
const CHARACTERS_PATH = `${BASE_PATH}/character?pageSize=20`;

const defaultHeaders = {
  "content-type": "application/json;charset=UTF-8",
};

export type CharacterResponseItem = {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
  tvShows: string[];
};

type CharactersResponse = {
  data: CharacterResponseItem[];
};

function filterCharacters(data: CharacterResponseItem[]) {
  return data.filter((item) => item.imageUrl && item.name);
}

/**
 * Performs a GET request to fetch a list of characters
 */
export async function getCharacters(): Promise<CharacterItem[]> {
  try {
    const response = await fetch(CHARACTERS_PATH, {
      method: RequestMethods.Get,
      headers: { ...defaultHeaders },
    });

    const { data }: CharactersResponse = await response.json();
    const filteredCharacters = filterCharacters(data || []);

    return filteredCharacters.map(
      ({ _id, name, imageUrl, films, tvShows }) => ({
        id: _id,
        name,
        image: imageUrl,
        films,
        tvShows,
      })
    );
  } catch (error) {
    throw error;
  }
}
