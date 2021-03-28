import React from 'react';
// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioMusicVideo.css";

const PortfolioMusicVideo =() => (
  
<Container>
    <div>
    <Segment>
    <h2>Music Videos</h2>
    
        <Grid>
            <Grid.Row >

                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card className="portfolioCard" id="dessaGhostsCard">
                       <Image src={require('../../assets/images/dessaGhosts.png')} size="medium" href="https://www.youtube.com/watch?v=B6A8T6qWPBo" rel="noreferrer noopener" target="_blank" alt="Dessa - Call Off Your Ghosts"/>
                        <h5>Dessa - Call Off Your Ghosts
                        </h5>
                        <p> Producer</p>
                    </Card>
                </Grid.Column>

                 <Grid.Column width={6}>
                    <Card className="portfolioCard" id="bethRestCard">
                        <Image src={require('../../assets/images/bethRest2.png')} size="medium" href="https://www.youtube.com/watch?v=wPSvDoqUl8Q" rel="noreferrer noopener" target="_blank" alt="Bon Iver - Beth Rest" />
                        <h5>Bon Iver - Beth Rest
                        </h5>
                        <p>First Assistant Director</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column width={2}>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row>

                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Card className="portfolioCard" id="dessaAlibiCard">
                       <Image src={require('../../assets/images/dessaAlibi.png')} size="medium" href="https://www.youtube.com/watch?v=J2_aY9gYTF0" rel="noreferrer noopener" target="_blank" alt="Dessa - Alibi"/>
                        <h5>Dessa - Alibi </h5>
                        <p>First Assistant Director</p>
                    </Card>
                </Grid.Column>

                <Grid.Column width={6}>
                     <Card className="portfolioCard" id="owlCityCard">
                        <Image src={require('../../assets/images/owlCity.png')} size="medium" href="https://www.youtube.com/watch?v=Z3gstWVGnSM&list=RDZ3gstWVGnSM" rel="noreferrer noopener" target="_blank" alt="Owl City - Metropolis"/>
                        <h5>Owl City - Metropolis
                        </h5>
                        <p>First Assistant Director</p>
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

export default PortfolioMusicVideo;