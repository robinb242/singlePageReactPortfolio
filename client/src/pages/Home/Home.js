import React from "react";
import { Grid, Container, Segment, Image } from 'semantic-ui-react';
import "./Home.css";
import Portfolio from '../Portfolio/Portfolio';
import TechnologiesIcons from '../../components/TechnologiesIcons/TechnologiesIcons';
import Resume from '../Resume/Resume';
import SlickDev from '../../components/SlickDev/SlickDev';
import Contact from '../Contact/Contact';


/* MAIN BODY*/ 

class Home extends React.Component {
  handleClick = (event) => {
    console.log ("handlePageLoad function");
  };

  render() {
    return <div>
    
    <Segment id="headerPhoto">
      <Container>
        <Image id="firstSnowImage" src={require('../../assets/images/1stSnowCrop.jpg')} />
          <Container id="headShotIntroText">
            <Image id="robinCircleLeft" src={require('../../assets/images/BertuccelliRobin3Circle2.png')}  floated='left' size='medium' alt='Robin Bertuccelli' /> 
          </Container>
      </Container>
    </Segment>

  <Segment>
     <h3 id="paragraphOne">
      Hello and thanks for stopping by. I am a Front End Web Developer with 12 years experience creating media for multiple platforms. I prefer
      a minimalist aesthetic and this approach seems optimal for 90% of the websites I have built. A little bling is fun, but design should 
      be functional and intuit.
    </h3>
   
    <h3 id="paragraph2">
     I write code that facilitates the consumption of data. Humans strive to build things, in the 21st century we build with code. I spend my days trying to find the best way to communicate with humans through 
     machines.
    </h3> 
  </Segment>

      <Portfolio />
      <TechnologiesIcons />

      {/*}
      <div>
        <SlickDev />
      </div>

      <div>
        <Contact />
        <Resume />
      </div>

    */}
</div>



  }
}

export default Home;

