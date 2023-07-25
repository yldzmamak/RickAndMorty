import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";


import { history } from "@/components/History";
import store from "@/store/ConfigStore";
import i18n from "@/translations/i18n";

import App from "./App";
import { HistoryRouter } from "./components";

/******* - Styles - *******/
import "@ant-design/icons";
import "@/assets/less/app.less";
/******* - ______ - *******/


const root = createRoot(document.getElementById("root") as Element);


root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </I18nextProvider>
  </Provider>
);