import React from 'react';
import {
   Container, Grid, Image, Card, Segment
} from 'semantic-ui-react';
import './TechnologiesIcons.css';

const TechnologiesIcons =() => (


<div>
<Container id="technologiesContainer">
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
	</Container>
</div>
);


export default TechnologiesIcons;