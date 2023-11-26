import React, { ReactElement, useEffect, useRef } from "react";

export interface BaseModuleProps {
  id: string;
  mount: (el: ReactElement | null) => void;
}

export const BaseModule: React.FC<BaseModuleProps> = ({ id, mount }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id={id} ref={ref}></div>;
};
