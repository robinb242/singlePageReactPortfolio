
    
import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./docs.css"; 
import "./SlickDev.css";
import {
   Container, Grid, Image, Card, Segment
} from 'semantic-ui-react';

export default class SlickDev extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      
      swipeToSlide: true
     
    };
    return (
      <div>
        <h2>Web Applications</h2>
        <Slider {...settings}>
          <div id="one">
            <Card className="portfolioCard" id="candiMatchCard">
              <Image src={require('../../assets/images/candiMatch4x3.png')} size="medium" href="https://protected-lake-93815.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">CandiMatch</h5>
              <p>Minnesota Gubernatorial Candidate Matching Quiz</p>
            </Card>
          </div>

          <div id="two">
            <Card className="portfolioCard" id="walkingDeadCard">
              <Image src={require('../../assets/images/walkingDeadClickyGame4x3.png')} size="medium" href="https://pacific-reaches-69935.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">Walking Dead themed Clicky Game</h5>
              <p>A simple game built with React </p>
            </Card>
          </div>

          <div id="three">
            <Card className="portfolioCard" id="petMatchCard">
               <Image src={require('../../assets/images/petMatch4x3.png')} size="medium" href="https://pet-match-app.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">AdoptMeNow - Rescue pet finding app. </h5>
              <p>Recommends a pet breed based on lifestyle quiz</p>
            </Card>
          </div>

          <div id="four">
            <Card className="portfolioCard" id="myShinDigCard">
              <Image src={require('../../assets/images/myShinDig4x3.png')} size="medium" href="https://robinb242.github.io/MyShindig/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">MyShinDig - Party Planning Site</h5>
              <p>A site for planning small potluck dinners</p>
            </Card>
          </div>

          <div id="five">
            <Card className="portfolioCard" id="nytReactSearchCard">
              <Image src={require('../../assets/images/nyt-react-search4x3.png')} size="medium" href="https://polar-crag-19379.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">New York Times Aricle Search</h5>
              <p>Search The New York Times Archives
              </p>
            </Card>         
          </div>

          <div id="six">
            <Card className="portfolioCard" id="officialPortfolioCard">
              <Image src={require('../../assets/images/officialPortfolio4x3.png')} size="medium" href="https://robinb242.github.io/official-portfolio/" rel="noreferrer noopener" target="_blank" />
              <h5 id="title">Early Portfolio in HTML</h5>
              <p>Portfolio Site </p>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
