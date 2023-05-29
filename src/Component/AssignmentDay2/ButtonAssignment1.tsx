import React from "react";
import { MouseEvent } from "react";

interface Props {
  buttonLabel: string;
}
const ButtonAssignment1 = (props: Props) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => console.log("Login button clicked!")}
    >
      {props.buttonLabel}
    </button>
  );
};

export default ButtonAssignment1;
