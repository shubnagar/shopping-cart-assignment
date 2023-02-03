import React from "react";
import "./styles/commonStyles.css";

type CommonInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const CommonInput = (props: CommonInputProps) => {
  return <input className="commonInput" {...props} />;
};

export default CommonInput;
