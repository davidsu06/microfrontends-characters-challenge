import { CharacterItem } from "../../models";
import { CharacterResponseItem, getCharacters } from "../characters";

const responseItems: CharacterResponseItem[] = [
  { _id: 1, name: "n1", imageUrl: "url1", films: [], tvShows: [] },
  { _id: 1, name: "", imageUrl: "", films: [], tvShows: [] },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: responseItems }),
  })
) as jest.Mock;

describe("Characters API", () => {
  describe("getCharacters", () => {
    it("should return the list of filtered characters", async () => {
      const characters = await getCharacters();
      const expectedResults: CharacterItem[] = [
        { id: 1, name: "n1", image: "url1", films: [], tvShows: [] },
      ];

      expect(characters).toEqual(expectedResults);
    });
  });
});
