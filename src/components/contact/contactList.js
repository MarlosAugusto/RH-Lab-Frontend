import React from 'react';
import Row from "../../components/row";
import Col from "../../components/col";

export default function ContactList({type, text}) {
  { console.log('items - ContactList', type, text) }

  return (
    <Row wd={11} style={{ marginTop: "15px" }}>
      <Col c={4} float={"left"} style={{ borderRadius: "7px", border: "1px solid #00000066", paddingLeft: "5px", paddingRight: "5px" }} >
        <span style={{ fontSize: 20 }}>{type}</span>
      </Col>
      <Col c={7} float={"right"} style={{ borderRadius: "7px", border: "1px solid #00000066", paddingLeft: "5px", paddingRight: "5px" }} >
        <span style={{ fontSize: 20 }}>{text}</span>
      </Col>
    </Row>
  )
}
