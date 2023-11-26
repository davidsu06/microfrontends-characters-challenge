import "@testing-library/jest-dom";

jest.mock(
  "utility/UtilityModule",
  () => ({
    List: ({ children }) => <div data-testid="list">{children}</div>,
    Card: ({ children }) => <div data-testid="card">{children}</div>,
    Subtitle: ({ children }) => <div data-testid="subtitle">{children}</div>,
    Spinner: ({ children }) => <div data-testid="spinner">{children}</div>,
    RequestMethods: {},
  }),
  { virtual: true }
);
