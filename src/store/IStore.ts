import { IAuthState } from "@/types/interfaces/authentication/authentication";
import { ICommonState } from "@/types/interfaces/dashboard/dashboard-state";
import { ISystemState } from "@/types/system";

export interface IStore {
	system: ISystemState;
	auth: IAuthState;
	common: ICommonState;
}