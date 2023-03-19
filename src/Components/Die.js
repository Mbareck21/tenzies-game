import React from "react";
import {  Row, Col } from "react-bootstrap";
function Die({ data, onHold }) {
  const styles = {
    color: "#2B283A",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
    fontSize: "20px",
  };

  return (
    <Row className=" w-25 p-3 mt-5  mx-auto bg-secondary rounded border mb-3">
      {data.map((die) => (
        <Col
          key={die.id}
          onClick={() => {
            onHold(die.id);
          }}
          // sm="2"
          className=" border rounded  mb-1 mx-1 me-1 text-center large"
          style={
            (styles,
            {
              background: die.isHeld ? "#59E391" : "white",
              width: "fit-content",
            })
          }
        >
          <strong> {die.value}</strong>
        </Col>
      ))}
    </Row>
  );
}

export default Die;
