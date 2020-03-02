import React from "react";
import SmileyImg from "../images/smile.png";
import Styled from "styled-components";

const Content = Styled.div`
  height: 43px;
  width: 43px;
  border-radius: 40px;
  border: 4px solid #333333;
  transition: width 0.5s ease;
  background-color: #333333;
  position:relative;
  z-index:1;

  :hover {
    cursor:pointer;
    width: 230px;
    height: 43px;
  } 

  :hover img {
    opacity:0;
    transition:opacity 1s linear;
  } 
`;

function showRateCard() {
  var BadgeCard = document.getElementById("badgecard");
  var RateCard = document.getElementById("ratecard");

  if (BadgeCard) {
    BadgeCard.style.display = "none";
    RateCard.style.display = "block";
    RateCard.style.opacity = 1;
    RateCard.style.zIndex = 1;
    RateCard.classList.add("rate-container-fade-in");
  }
}

export const Badges = () => (
  <div id="badgecard" className="badge_container">
    <Content id="badgeoverlay">
      <img src={SmileyImg} alt="close Icon" />
      <div onClick={showRateCard} className="badge_text">
        Help us improve
      </div>
    </Content>
  </div>
);
