import React from "react";
import { Card } from "react-bootstrap";

export const BsCard = ({ cardData = null }) => {
  return (
    <Card style={{ width: "235px", height: "275px" }} className="m-2">
      <div
        className="p-8 text-center"
        style={{ backgroundColor: "rgb(192 195 192 / 30%)" }}
      >
        <Card.Img
          style={{ height: "180px", width: "100px" }}
          src={cardData.image}
        />
      </div>
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        <Card.Text className="text-muted">By {cardData.author}</Card.Text>
      </Card.Body>
    </Card>
  );
};
