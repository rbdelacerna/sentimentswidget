import React from "react";
import Styled from "styled-components";
import { Button } from "react-bootstrap";
import CloseImg from "../images/close.png";

const Header = Styled.div`
color: #eeeeee;
font-size: 14px;
font-weight: bold;
font-family: sans-serif;
text-align:center;
padding:15px;
`;

const Content = Styled.div`
  padding: 10px 15px 0px 15px;
`;

const Title = Styled.div`
color: #333333;
font-size: 14px;
font-weight: bold;
font-family: sans-serif;
`;

const Container = Styled.div`
text-align:right;
padding:15px;
`;

const Close = Styled.div`
   position: absolute;
    top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
    cursor:pointer;
`;

const Card = Styled.div`
width: 350px;
height: 450px;
position: relative;
box-sizing: border-box;
bottom: 410px;
left: 6px;
display: none;
`;

function closeCard() {
  var BadgeCard = document.getElementById("badgecard");
  var TellUsMoreCard = document.getElementById("tellusmorecard");
  if (TellUsMoreCard) {
    BadgeCard.style.display = "block";
    TellUsMoreCard.style.display = "none";
  }
}

function thankYou() {
  var TellUsMoreCard = document.getElementById("tellusmorecard");
  var ThankYouCard = document.getElementById("thankyoucard");

  if (TellUsMoreCard) {
    TellUsMoreCard.style.display = "none";
    ThankYouCard.style.display = "block";
    const element = document.querySelector(".thankyou_container");
    element.classList.add("animated", "bounceIn");
  }

  setTimeout(function() {
    ThankYouCard.style.display = "none";
  }, 3000);
}

export const TellUsMore = () => (
  <Card id="tellusmorecard" className="tellsumore_container">
    <Close>
      <img height="20" onClick={closeCard} src={CloseImg} alt="Close Icon" />
    </Close>
    <div className="tellusmore_card_header">
      <Header>Tell us more</Header>
    </div>
    <div className="tellusmore_card_body">
      <br></br>
      <Content>
        <Title>What did you like most?</Title>
        <textarea placeholder="Tell us your experience? (optional)"></textarea>
      </Content>
      <Content>
        <Title>What did you like least?</Title>
        <textarea placeholder="Let us know how we can improve (optional)"></textarea>
      </Content>
      <Content>
        <Title>Your email</Title>
        <input type="email" placeholder="Your email address (optional)"></input>
      </Content>
    </div>
    <div className="tellusmore_card_footer">
      <Container>
        <Button variant="dark" onClick={thankYou}>
          SUBMIT
        </Button>
      </Container>
    </div>
  </Card>
);
