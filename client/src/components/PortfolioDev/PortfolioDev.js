import React from 'react';
// import './Candidate.css';
import {
   Container, Grid, Image, Card, Segment
} from 'semantic-ui-react';
import './PortfolioDev.css';

const PortfolioDev =() => (
  

    <div>
    <Container id="container">
    <h1>PORTFOLIO</h1>
    <Segment id="segmentContainer">
    <h2>Web Applications</h2>
    
        <Grid>
            <Grid.Row>

                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}> 
                    <Card className="portfolioCard" id="candiMatchCard">
                       <Image src={require('../../assets/images/candiMatch4x3.png')} size="medium" href="https://protected-lake-93815.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>CandiMatch</h5>
                        <p>Minnesota Candidate Matching Quiz</p>
                    </Card> 
                </Grid.Column>

                <Grid.Column width={6}>
                     <Card className="portfolioCard" id="walkingDeadCard">
                        <Image src={require('../../assets/images/walkingDeadClickyGame4x3.png')} size="medium" href="https://pacific-reaches-69935.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>Walking Dead themed Clicky Game</h5>
                        <p>A simple game built with React.
                        </p>
                        </Card>
                </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card className="portfolioCard" id="petMatchCard">
                         <Image src={require('../../assets/images/petMatch4x3.png')} size="medium" href="https://pet-match-app.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>AdoptMeNow</h5> 
                        <p>Rescue pet finding app.</p>

                    </Card>
                 </Grid.Column>

                 <Grid.Column width={6}>
                    <Card className="portfolioCard" id="myShinDigCard">
                         <Image src={require('../../assets/images/myShinDig4x3.png')} size="medium" href="https://robinb242.github.io/MyShindig/" rel="noreferrer noopener" target="_blank" />
                        <h5>MyShinDig - Party Planning Site</h5>
                        <p>A site for planning small potluck dinners.
                        </p>
                    </Card>
                 </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>
            </Grid.Row>

             <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>

                  <Grid.Column width={6}>
                      <Card className="portfolioCard" id="nytReactSearchCard">
                         <Image src={require('../../assets/images/nyt-react-search4x3.png')} size="medium" href="https://thawing-atoll-98049.herokuapp.com/" rel="noreferrer noopener" target="_blank" />
                        <h5>New York Times Aricle Search</h5>
                       
                        <p>Search The New York Times Archives
                         </p>

                        </Card>
                 </Grid.Column>

                 <Grid.Column width={6}>
                     <Card className="portfolioCard" id="officialPortfolioCard">
                         <Image src={require('../../assets/images/officialPortfolio4x3.png')} size="medium" href="https://robinb242.github.io/official-portfolio/" rel="noreferrer noopener" target="_blank" />
                        <h5>Early Portfolio in HTML</h5>
                        <p>Portfolio Site
                        </p>
                        </Card>
                 </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    </Container>
    </div>




);

export default PortfolioDev;
