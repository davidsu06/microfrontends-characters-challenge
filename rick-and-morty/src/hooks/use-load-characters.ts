import { useCallback, useEffect, useState } from "react";
import { getCharacters } from "../api";
import { CharacterItem } from "../models";

interface UseLoadCharacters {
  characters: CharacterItem[];
  isLoading: boolean;
}

export const useLoadCharacters = (): UseLoadCharacters => {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  const loadCharacters = useCallback(async () => {
    setLoading(true);

    try {
      const characters = await getCharacters();
      setCharacters(characters);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCharacters();
  }, []);

  return { characters, isLoading };
};
