import React from "react";
import CloseImg from "../images/close.png";
import Styled from "styled-components";
import { Card } from "react-bootstrap";

const Title = Styled.div`
color: #333333;
font-size: 14px;
font-weight: bold;
font-family: sans-serif;
margin-bottom:10px;
text-align:center;
`;

const RateBox = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  font-weight: normal;
  font-family: sans-serif;
  margin-left: 15px;
  color: #333333;
`;

const BoxStart = Styled.div`
width: 40px;
height: 35px;
border: 1px solid black;
padding: 8px;
border-radius: 5px 0px 0px 5px;
text-align:center;
cursor:pointer;

:hover {
  background: #E8E7E7;
}
`;

const Box = Styled.div`
width: 40px;
height: 35px;
border-top: 1px solid black;
border-bottom: 1px solid black;
border-right: 1px solid black;
padding: 8px;
border-radius: 0;
text-align:center;
cursor:pointer;

:hover {
  background: #E8E7E7;
}
`;

const BoxEnd = Styled.div`
width: 40px;
height: 35px;
border-top: 1px solid black;
border-bottom: 1px solid black;
border-right: 1px solid black;
padding: 8px;
border-radius: 0px 5px 5px 0px;
text-align:center;
cursor:pointer;

:hover {
  background: #E8E7E7;
}
`;

const RateStatus = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  font-weight: normal;
  font-family: sans-serif;
  padding-top: 10px;
`;

const StatusText = Styled.div`
  width: 150px;
  height: auto;
  color: #333333;
`;

const Close = Styled.div`
   position: absolute;
    top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
    cursor:pointer;
`;

function closeCard() {
  var badgeCard = document.getElementById("badgecard");
  var rateCard = document.getElementById("ratecard");
  if (rateCard) {
    badgeCard.style.display = "block";
    rateCard.style.display = "none";
  }
}

function rateExperience() {
  var RateCard = document.getElementById("ratecard");
  var RateMoreCard = document.getElementById("ratemorecard");
  var TellUsMoreCard = document.getElementById("tellusmorecard");

  if (RateCard) {
    RateCard.style.display = "none";
    RateMoreCard.style.display = "block";
    const element = document.querySelector(".ratemore_container");
    element.classList.add("animated", "bounceIn");
  }

  setTimeout(function() {
    RateMoreCard.style.display = "none";
    TellUsMoreCard.style.display = "block";
  }, 3000);
}

export const Rate = () => (
  <Card id="ratecard" className="rate_container" style={{ display: "none" }}>
    <Card.Body>
      <Close onClick={closeCard}>
        <img height="20" src={CloseImg} alt="Close Icon" />
      </Close>
      <div className="rate_bg">
        <Title>Rate your experiece</Title>
        <RateBox>
          <BoxStart id="1" onClick={rateExperience}>
            1
          </BoxStart>
          <Box id="2" onClick={rateExperience}>
            2
          </Box>
          <Box id="3" onClick={rateExperience}>
            3
          </Box>
          <Box id="4" onClick={rateExperience}>
            4
          </Box>
          <Box id="5" onClick={rateExperience}>
            5
          </Box>
          <BoxEnd id="6" onClick={rateExperience}>
            6
          </BoxEnd>
        </RateBox>
        <RateStatus>
          <StatusText>NOT SATISFIED</StatusText>
          <StatusText></StatusText>
          <StatusText>VERY SATISFIED</StatusText>
        </RateStatus>
      </div>
    </Card.Body>
  </Card>
);
