import React, { Fragment } from "react";

import Routers from "../../routers/Routers";

import Header from "../Header/Header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="bg-[#000334]">
        <Routers />
      </div>
    </Fragment>
  );
};

export default Layout;
