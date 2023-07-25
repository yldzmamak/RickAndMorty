import { createSelector } from "reselect";

import { IStore } from "@/store/IStore";
import { ISystemState } from "@/types/system";

export const selectDeviceType = (state: IStore) => state.system;

const getLanguageSelector = createSelector(
  (state: IStore) => state.system,
  (system: ISystemState) => system.language,
);

export { getLanguageSelector };
