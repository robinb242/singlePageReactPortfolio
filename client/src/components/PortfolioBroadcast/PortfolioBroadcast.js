import React from 'react';
// import './Candidate.css';
import {
   Container, Grid, Image, Segment, Card
} from 'semantic-ui-react';
import "./PortfolioBroadcast.css";

const PortfolioBroadcast =() => (
  
<Container>
    <div>
    <Segment>
    <h2 id="title"> Broadcast Commercials</h2>
    <hr />
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                <Card className="portfolioCard" id="neilGaimanCard">
                   <Image src={require('../../assets/images/neilGaiman4x3.png')} size="medium" href="https://www.youtube.com/watch?v=msRTrXiolS8" rel="noreferrer noopener" target="_blank" />
                    <h5>Neil Gaiman/Blackberry
                    </h5>
                    <p>Line Producer</p>
                </Card>
                </Grid.Column>

                <Grid.Column>
                <Card className="portfolioCard" id="brettFavreCard">
                     <Image src={require('../../assets/images/brettFavre4x3.png')} size="medium" href="https://youtu.be/JD_n7ExZVZk" rel="noreferrer noopener" target="_blank" />
                    <h5>Brett Farve/Hyundai Superbowl Commercial</h5>
                    
                    <p>Set Decorator</p>
                </Card>
                 </Grid.Column>
            </Grid.Row>

             <Grid.Row columns={2}>
                <Grid.Column>
                <Card className="portfolioCard" id="cenexGuyCard">
                   <Image src={require('../../assets/images/cenexGuy4x3.png')} size="medium" href="https://www.youtube.com/watch?v=e3hanXCZtWk" rel="noreferrer noopener" target="_blank" />
                    <h5>Cenex Guy
                    </h5>
                    <p>Second Assistant Director</p>
                </Card>
                </Grid.Column>

                <Grid.Column>
                <Card className="portfolioCard" id="duracellIowaCard">
                     <Image src={require('../../assets/images/duracellIowa4x3.png')} size="medium" href="https://www.youtube.com/watch?v=TMcrrS9yHWs" rel="noreferrer noopener" target="_blank" />
                    <h5>Duracell</h5>
                    
                    <p>Second Assistant Director</p>
                </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    </div>
</Container>

);

export default PortfolioBroadcast;
