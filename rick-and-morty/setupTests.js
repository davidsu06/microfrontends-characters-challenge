import "@testing-library/jest-dom";

jest.mock(
  "utility/UtilityModule",
  () => ({
    List: ({ children }: React.PropsWithChildren) => (
      <div data-testid="list">{children}</div>
    ),
    Card: ({ children }: React.PropsWithChildren) => (
      <div data-testid="card">{children}</div>
    ),
    Subtitle: ({ children }: React.PropsWithChildren) => (
      <div data-testid="subtitle">{children}</div>
    ),
    Spinner: ({ children }: React.PropsWithChildren) => (
      <div data-testid="spinner">{children}</div>
    ),
    RequestMethods: {},
  }),
  { virtual: true }
);
