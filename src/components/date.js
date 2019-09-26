import React from "react";
import { useRef } from "react";
import useInputMask from "use-input-mask";
import { createAutoCorrectedDatePipe } from "text-mask-addons";

export const DateInput = props => {
  const input = useRef(null);
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe("dd/mm/yyyy HH:MM");

  const onChange = useInputMask({
    input,
    onChange: props.onChange,
    mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    pipe: autoCorrectedDatePipe,
    keepCharPositions: true
  });

  return (
    <input
      {...props}
      ref={input}
      onChange={onChange}
      style={{ width: "100%" }}
    />
  );
};
