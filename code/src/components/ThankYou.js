import React from "react";
import Styled from "styled-components";
import { Card } from "react-bootstrap";

const Title = Styled.div`
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  text-align:center;
`;

const Description = Styled.div`
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  text-align:center;
`;

export const ThankYou = () => (
  <Card id="thankyoucard" className="thankyou_container" style={{ opacity: 0 }}>
    <Card.Body>
      <Title>Thank you!</Title>
      <Description>Your feedback is valuable to us.</Description>
    </Card.Body>
  </Card>
);
