import React from "react";
import { mount } from "rickAndMorty/RickAndMortyModule";
import { BaseModule } from "./base-module";

export const rickAndMortyModuleId = "rickAndMortyModuleId";

export const RickAndMortyModule = () => {
  return <BaseModule id={rickAndMortyModuleId} mount={mount} />;
};
