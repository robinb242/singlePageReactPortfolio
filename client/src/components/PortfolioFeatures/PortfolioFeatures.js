import React from 'react';
// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioFeatures.css";

const PortfolioFeatures =() => (
  
<Container>
    <div>
    <Segment>
        <h2>Feature Films</h2>
    
            <Grid>
                <Grid.Row>

                    <Grid.Column width={2}>
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <Card className="portfolioCard" id="profileCard">
                           <Image src={require('../../assets/images/profile200.png')} size="medium" href="https://www.youtube.com/watch?v=2zEgzlin07M" rel="noreferrer noopener" target="_blank" alt="Profile of a Killer"/>
                            <h5>Profile Of A Killer</h5>
                           <p>First Assistant Director
                            </p>
                        </Card>
                    </Grid.Column>

                    <Grid.Column width={6}>
                         <Card className="portfolioCard" id="intoTemptationCard">
                            <Image src={require('../../assets/images/intoTemptation.png')} size="medium" href="https://www.youtube.com/watch?v=WFoEzf2WTgg&t=10s" rel="noreferrer noopener" target="_blank" alt="Into Temptation" />
                            <h5>Into Temptation
                            </h5>
                            <p>Second Assistant Director
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
                        <Card className="portfolioCard" id="publicDomainCard">
                           <Image src={require('../../assets/images/publicDomain.png')} size="medium" href="https://www.youtube.com/watch?v=2ffE2gQP-j0" rel="noreferrer noopener" target="_blank" alt="The Public Domain"/>
                            <h5>The Public Domain
                            </h5>
                            <p>First Assistant Director</p>
                        </Card>
                    </Grid.Column>

                         <Grid.Column width={6}>
                            <Card className="portfolioCard" id="jingleDressCard">
                             <Image src={require('../../assets/images/jingleDress2.png')} size="medium" href="https://www.youtube.com/watch?v=JdASEjOjJCU" rel="noreferrer noopener" target="_blank" alt="The Jingle Dress"/>
                            <h5>The Jingle Dress
                            </h5>
                            <p>First Assistant Director
                            </p>
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

export default PortfolioFeatures;