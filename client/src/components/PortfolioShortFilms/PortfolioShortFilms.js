import React from 'react';

// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioShortFilms.css";

const PortfolioShortFilms =() => (
  
<Container id="shortFilmsContainer">
    <div>
    <Segment>
    <h2>Short Films</h2>
    
        <Grid>
            <Grid.Row>

                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card id="tattooUndergroundCard">
                       <Image src={require('../../assets/images/tattooUnderground.png')} size="medium" href="https://player.vimeo.com/video/47910614" rel="noreferrer noopener" target="_blank" alt="Tattoo Underground"/>
                        <h5>Tattoo Underground
                        </h5>
                        <p>Set Dresser</p>
                    </Card>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card id ="feminineMystiqueCard">
                        <Image src={require('../../assets/images/feminineMystique200.png')} size="medium" href="https://vimeo.com/900342" rel="noreferrer noopener" target="_blank" alt="The Feminine Mystique" />
                        <h5>The Feminine Mystique
                        </h5>
                        <p>Key Grip</p>
                    </Card>
                </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>
            </Grid.Row>

             <Grid.Row>

                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card id="karlsBigBreakCard">
                       <Image src={require('../../assets/images/karlsBigBreak.png')} size="medium" href="https://vimeo.com/25844393" rel="noreferrer noopener" target="_blank" alt="Tattoo Underground"/>
                        <h5>Karl's  Big Break</h5>
                        <p>Second Assistant Director</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column width={6}>
                    <Card id ="happinessWellCard">
                        <Image src={require('../../assets/images/happinessWell.png')} size="medium" href="https://www.youtube.com/watch?v=eADeUU_nSWo" rel="noreferrer noopener" target="_blank" alt="The Feminine Mystique" />
                        <h5>The Happiness Well
                        </h5>
                        <p>Second Assitant Director</p>
                    </Card>
                 </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioShortFilms;