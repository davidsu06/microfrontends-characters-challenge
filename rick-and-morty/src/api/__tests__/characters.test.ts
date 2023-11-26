import { mockCharacterItems } from "../../tests/mocks";
import { getCharacters } from "../characters";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: mockCharacterItems }),
  })
) as jest.Mock;

describe("Characters API", () => {
  describe("getCharacters", () => {
    it("should return the list of characters", async () => {
      const characters = await getCharacters();

      expect(characters).toEqual(mockCharacterItems);
    });
  });
});
