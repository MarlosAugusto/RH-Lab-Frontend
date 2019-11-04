import React from "react";
import styled from "styled-components/";

const Txt = styled.span`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;
`;
const Btn = styled.button`
  background-color: ${props => (props.bg ? props.bg : "#ffffff")}cc;
  border-radius: 10px;
  color: ${props => props.color};
  border: ${props => props.color} solid 1px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 40px;
  text-align: center;
`;

export default function Button({
  title,
  color,
  bg,
  changeStep,
  outherFunction
}) {
  return (
    <Btn
      color={color}
      bg={bg}
      onClick={() => {
        changeStep && changeStep(title);
        outherFunction && outherFunction();
      }}
    >
      {title}
      {/* <Txt color={color}>{title}</Txt> */}
    </Btn>
  );
}
