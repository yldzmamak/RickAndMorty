import { PayloadAction, createSlice } from "@reduxjs/toolkit";


import { SystemService } from "@/services/system.service";
import { DeviceTypes, ISystemState, LanguageTypes } from "@/types/system";


const initialState: ISystemState = SystemService.getLocalSystemConfig();

const systemSlices = createSlice({
  name: "SYSTEM",
  initialState,
  reducers: {
    setLanguage (state, action: PayloadAction<LanguageTypes>) {
      state.language = action.payload;
    },
    setDeviceType (state, action: PayloadAction<DeviceTypes>) {
      state.device = action.payload;
    },
  }
});

export const SystemActions = systemSlices.actions;

export default systemSlices.reducer;