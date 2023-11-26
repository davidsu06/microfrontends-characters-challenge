import "@testing-library/jest-dom";

jest.mock(
  "disney/DisneyModule",
  () => ({
    mount: jest.fn(),
    useSwitchLanguage: jest.fn(),
  }),
  { virtual: true }
);

jest.mock(
  "rickAndMorty/RickAndMortyModule",
  () => ({
    mount: jest.fn(),
    useSwitchLanguage: jest.fn(),
  }),
  { virtual: true }
);
