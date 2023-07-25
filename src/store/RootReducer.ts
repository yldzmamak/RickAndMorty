
import { AnyAction, CombinedState, Reducer, combineReducers } from "redux";

import authSlices, { AuthActions } from "@/features/auth/authSlices";
import commonSlices from "@/features/common/commonSlices";
import systemSlices from "@/features/system/systemSlices";

import { IStore } from "./IStore";

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
	system: systemSlices,
	auth: authSlices,
	common: commonSlices,
});

const rootReducer = (state: CombinedState<IStore> | undefined, action: AnyAction) => {
	if (action.type === AuthActions.logout.type) {
		return appReducer(undefined, action);
	}

	return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
