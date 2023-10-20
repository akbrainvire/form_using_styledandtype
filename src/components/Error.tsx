import React from "react";
import { ErrorBox } from "./styles/InputStyle";

const Error = (props: any) => {
  return <ErrorBox>{props.message}</ErrorBox>;
};

export default Error;
