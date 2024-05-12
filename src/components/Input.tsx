"use client";

import React from "react";
import { InputOnChange } from "@/common/types";

type InputProps = {
  required?: boolean;
  placeholder?: string;
  name: string;
  value: string;
  onChange: InputOnChange;
  id?: string;
  className?: string;
};

export const Input = (props: InputProps) => {
  return <input type="text" pattern="[0-9]+([,][0-9]{0,2})?" {...props} />;
};
