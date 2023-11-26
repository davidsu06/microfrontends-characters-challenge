import { renderHook, waitFor } from "@testing-library/react";
import { getCharacters } from "../../api";
import { useLoadCharacters } from "../use-load-characters";
import { mockCharacterItems } from "../../tests/mocks";

jest.mock("../../api");

const mockGetCharacters = jest.mocked(getCharacters);

describe("useLoadCharacters hook", () => {
  beforeEach(() => {
    mockGetCharacters.mockReturnValue(Promise.resolve(mockCharacterItems));
  });

  it("should invoke getCharacters to load data", async () => {
    renderHook(() => useLoadCharacters());
    await waitFor(() => expect(mockGetCharacters).toHaveBeenCalled());
  });

  it("should return loaded characters", async () => {
    const { result } = renderHook(() => useLoadCharacters());

    await waitFor(() =>
      expect(result.current).toEqual({
        characters: mockCharacterItems,
        isLoading: false,
      })
    );
  });
});
