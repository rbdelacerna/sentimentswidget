import React from "react";
import SmileyImg from "../images/smile.png";
import Styled from "styled-components";
import { Card } from "react-bootstrap";

const Title = Styled.div`
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  text-align:center;
  margin-left: 20px;
  margin-top: 10px;
`;

const RateMoreBox = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  font-weight: normal;
  font-family: sans-serif;
`;

export const RateMore = () => (
  <Card id="ratemorecard" className="ratemore_container" style={{ opacity: 0 }}>
    <Card.Body>
      <RateMoreBox>
        <img src={SmileyImg} alt="Smile Icon" />
        <Title>Thank you, tell us more!</Title>
      </RateMoreBox>
    </Card.Body>
  </Card>
);
