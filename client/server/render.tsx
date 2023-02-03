import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Home from "../src/view/home/Home";

const serverRender = async () => {
  const initialMarkup = ReactDomServer.renderToString(
    <React.Fragment>
      <StaticRouter location={"/"}>
        <Home />
      </StaticRouter>
    </React.Fragment>
  );

  return { initialMarkup };
};

export default serverRender;
