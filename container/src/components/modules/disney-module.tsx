import React from "react";
import { mount } from "disney/DisneyModule";
import { BaseModule } from "./base-module";

export const disneyModuleId = "disneyModuleId";

export const DisneyModule = () => {
  return <BaseModule id={disneyModuleId} mount={mount} />;
};
