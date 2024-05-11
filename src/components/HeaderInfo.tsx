"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Message } from "./Message";
import { Box } from "./Box";

export const HeaderInfo = () => {
  const { items } = useContext(AppContext);
  return (
    <div id="head-wrapper" className="box">
      {items.length === 0 ? <Message /> : <Box />}
    </div>
  );
};
