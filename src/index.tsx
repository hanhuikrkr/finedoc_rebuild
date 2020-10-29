import "./index.scss";
import App from "./App";
import ReactDOM from "react-dom";
import injects from "./store";
import * as React from "react";
import { Component } from "react";
import { Provider } from "mobx-react";

import "antd/dist/antd.css";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

ReactDOM.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <App></App>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
