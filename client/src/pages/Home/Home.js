import React from "react";
import { Grid, Container, Segment, Image } from 'semantic-ui-react';
import "./Home.css";
import Portfolio from '../Portfolio/Portfolio';
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
    
    <Segment textAlign ="center">
      <Container>
        <Image id="robinsDesk" src={require('../../assets/images/1stSnowCrop.jpg')} />
          <Container id="headShotIntroText">
            <Image id="robinCircleLeft" src={require('../../assets/images/BertuccelliRobin3Circle2.png')}  floated='left' size='medium' alt='Robin Bertuccelli' /> 
          </Container>
      </Container>
    </Segment>

  <Segment>
     <h3 id="paragraphOne">
      Hello and thanks for stopping by. I am a Front End Web Developer with 12 years experience creating media for multiple platforms. I prefer
      a minimalist aesthetic and this approach seems optimal for 90% of the websites I have built. A little bling is fun, but design should 
      complement function and intuitiveness.
    </h3>
   
    <h3 id="paragraph2">
     I write code that facilitates the consumption of data. Humans strive to build things, in the 21st century we build with code. I spend my days trying to find the best way to communicate with humans through 
     machines.
    </h3> 
  </Segment>
{/* Table of technologies */}
  <Segment>

    <Grid columns={6}>
    
      <Grid.Row>
        <Grid.Column id="HTML5_icon">
           <a href="https://www.w3.org/TR/html52/"  rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/html5.png')}  alt="HTML5 Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column id="CSS3_icon"> 
          <a href="https://www.w3.org/Style/CSS/" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/css3.png')}  alt="CSS3 Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column id="javascript_icon">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/javascript.png')}  alt="Javascript Logo" size='tiny' /> </a> 
        </Grid.Column>
      
        <Grid.Column id="jquery_icon">
        <a href="https://jquery.com/" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/jquery.png')}  alt="JQuery Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column id="mysql_icon">
        <a href="https://dev.mysql.com/doc/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/mysql.png')} alt="MySQL Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="MongoDB_icon">
        <a href="https://www.mongodb.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/mongo.jpg')} alt="MongoDB Logo" size='tiny' /> </a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column id="nodeJS_icon"> 
        <a href="https://nodejs.org" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/node_js.png')} alt="NodeJS Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="rreactJS_icon">
        <a href="https://reactjs.org/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/react.png')} alt="React Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="drupal_icon">
        <a href="http://www.drupal.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/drupal.png')} alt="Drupal Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="expressjs_icon">
        <a href="https://expressjs.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/expressjs.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="handlebars_icon">
        <a href="https://handlebarsjs.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/handlebars.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column id="semanticUI_icon">
        <a href="https://react.semantic-ui.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/semanticUI.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>


      </Grid.Row>
    
    </Grid>
  </Segment>

 
      <Portfolio />

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

