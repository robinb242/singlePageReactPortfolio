import React from 'react';
// import './Candidate.css';
import {
   Container, Grid, Image, Card, Segment
} from 'semantic-ui-react';
import './PortfolioDev.css';

const PortfolioDev =() => (
  
<Container>
    <div>
    <Segment id="segmentContainer">
    <h1>Web Applications</h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column>
                    <Card className="portfolioCard" id="candiMatchCard">
                       <Image src={require('../../assets/images/candiMatch4x3.png')} size="medium" href="https://protected-lake-93815.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>CandiMatch</h5>
                        <p>Minnesota Gubernatorial Candidate Matching Quiz</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                     <Card className="portfolioCard" id="walkingDeadCard">
                         <Image src={require('../../assets/images/walkingDeadClickyGame4x3.png')} size="medium" href="https://pacific-reaches-69935.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>Walking Dead themed Clicky Game</h5>
                        <p>A simple game built with React.
                        </p>
                        </Card>
                 </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
                  <Grid.Column>
                      <Card className="portfolioCard" id="petMatchCard">
                         <Image src={require('../../assets/images/petMatch4x3.png')} size="medium" href="https://pet-match-app.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>AdoptMeNow - Rescue pet finding app. </h5>
                       
                        <p>Recommends a pet breed based on lifestyle quiz.

                         </p>

                        </Card>
                 </Grid.Column>

                 <Grid.Column>
                     <Card className="portfolioCard" id="myShinDigCard">
                         <Image src={require('../../assets/images/myShinDig4x3.png')} size="medium" href="https://robinb242.github.io/MyShindig/" rel="noreferrer noopener" target="_blank" />
                        <h5>MyShinDig - Party Planning Site</h5>
                        <p>A site for planning small potluck dinners.
                        </p>
                        </Card>
                 </Grid.Column>
            </Grid.Row>

             <Grid.Row columns={2}>
                  <Grid.Column>
                      <Card className="portfolioCard" id="nytReactSearchCard">
                         <Image src={require('../../assets/images/nyt-react-search4x3.png')} size="medium" href="https://polar-crag-19379.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>New York Times Aricle Search</h5>
                       
                        <p>Search The New York Times Archives
                         </p>

                        </Card>
                 </Grid.Column>

                 <Grid.Column>
                     <Card className="portfolioCard" id="officialPortfolioCard">
                         <Image src={require('../../assets/images/officialPortfolio4x3.png')} size="medium" href="https://robinb242.github.io/official-portfolio/" rel="noreferrer noopener" target="_blank" />
                        <h5>Early Portfolio in HTML</h5>
                        <p>Portfolio Site
                        </p>
                        </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioDev;
