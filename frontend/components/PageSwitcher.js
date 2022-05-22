import React, { useState } from "react";
import Mic from "../pages/Mic";
import Thoughts from "../pages/Thoughts";
import Note from "./Note";

function PageSwitcher(props) {
  const [currFolder, setCurrFolder] = useState("");

  switch (props.page) {
    case "home":
      return <Mic setPage={props.setPage} />;
    case "thoughts":
      return <Thoughts setPage={props.setPage} setCurrFolder={setCurrFolder} />;
    case "note":
      // console.log(props.text);
      return (
        <Note setPage={props.setPage} text="awwaf" currFolder={currFolder} />
      );
    default:
      return <>page does not exist</>;
  }
}

export default PageSwitcher;
