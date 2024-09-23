import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";

import styles from "./index.module.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Main from "./layouts/main";

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className={styles.app}>
        <Header />
        <Main>
          <Router>
            <Routes></Routes>
          </Router>
        </Main>
        <Footer />
      </div>
    </SWRConfig>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
