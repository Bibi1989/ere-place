import React from "react";
import { Side } from "./SideBarStyle";
import {
  SideComponent1,
  SideComponent2,
  SideComponent3
} from "./SideBarComponent";

const SideBar = () => {
  return (
    <Side>
      <SideComponent1 />
      <SideComponent2 />
      <SideComponent3 />
    </Side>
  );
};

export default SideBar;
