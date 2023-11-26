import { render } from "@testing-library/react";
import { BaseModule, BaseModuleProps } from "../base-module";

describe("BaseModule component", () => {
  const mountMock = jest.fn();

  const defaultProps: BaseModuleProps = {
    id: "mockId",
    mount: mountMock,
  };

  function renderComponent(props?: Partial<BaseModuleProps>) {
    return render(<BaseModule {...defaultProps} {...props} />);
  }

  it("should set module id", () => {
    const element = renderComponent();
    expect(element.container?.querySelector("#mockId")).toBeInTheDocument();
  });

  it("should call mount callback", () => {
    renderComponent();
    expect(mountMock).toHaveBeenCalled();
  });
});
