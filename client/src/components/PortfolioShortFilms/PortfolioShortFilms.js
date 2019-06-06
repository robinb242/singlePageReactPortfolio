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
    <h1>Short Films</h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column>
                <Card id="tattooUndergroundCard">
                   <Image src={require('../../assets/images/tattooUnderground.png')} size="medium" href="https://player.vimeo.com/video/47910614" rel="noreferrer noopener" target="_blank" alt="Tattoo Underground"/>
                    <h5>Tattoo Underground
                    </h5>
                    <p>Set Dresser - A short film by the late Barry Kimm which explores some deeply personal reasons people get tattoos.</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                 <Card id ="feminineMystiqueCard">
                     <Image src={require('../../assets/images/feminineMystique200.png')} size="medium" href="https://vimeo.com/900342" rel="noreferrer noopener" target="_blank" alt="The Feminine Mystique" />
                    <h5>The Feminine Mystique
                    </h5>
                    <p>Key Grip - A single take steady cam short film. Directed and shot by Ryan Taylor.</p>
                    </Card>
                 </Grid.Column>
            </Grid.Row>

             <Grid.Row columns={2}>

                <Grid.Column>
                <Card id="karlsBigBreakCard">
                   <Image src={require('../../assets/images/karlsBigBreak.png')} size="medium" href="https://vimeo.com/25844393" rel="noreferrer noopener" target="_blank" alt="Tattoo Underground"/>
                    <h5>Karl's  Big Break</h5>
                    <p>Second Assistant Director - A fun short with a few of the Twin Cities best actors.</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                 <Card id ="happinessWellCard">
                     <Image src={require('../../assets/images/happinessWell.png')} size="medium" href="https://www.youtube.com/watch?v=eADeUU_nSWo" rel="noreferrer noopener" target="_blank" alt="The Feminine Mystique" />
                    <h5>The Happiness Well
                    </h5>
                    <p>Second Assitant Director: A Great Collaboration for PBS.</p>
                    </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioShortFilms;