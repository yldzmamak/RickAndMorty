import { connect } from "react-redux";


import { getLoading } from "@/features/auth/authSelectors";
import { AuthActions } from "@/features/auth/authSlices";
import { IStore } from "@/store/IStore";
import { ILogin } from "@/types/interfaces/authentication/authentication";

import Login from "../Login";


export const formInitialValues: ILogin = {
  CLIENT_USERNAME: "",
  CLIENT_PASSWORD: "",
};

export interface LoginProps {
  loading: boolean;
  login: (loginValues: ILogin) => void;
}

const mapStateToProps = (state: IStore) => {
  return {
    loading: getLoading(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (loginValues: ILogin) => dispatch(AuthActions.login(loginValues))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);