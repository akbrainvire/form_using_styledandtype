import React from "react";
import { InputStyles } from "./styles/InputStyle";

const Input = (props: any) => {
  return (
    <>
      <InputStyles
        icon={props.icon}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
