import React, { useState } from "react";
import Mic from "../pages/Mic";
import Thoughts from "../pages/Thoughts";

function PageSwitcher(props) {
  switch (props.page) {
    case "home":
      return <Mic setPage={props.setPage} />;
    case "thoughts":
      return <Thoughts setPage={props.setPage} />;
    default:
      return <>page does not exist</>;
  }
}

export default PageSwitcher;
