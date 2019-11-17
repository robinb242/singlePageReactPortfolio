
import React, { Component, createRef } from 'react';
import { Menu, Image, Sticky, Container, Segment, Responsive, Dropdown, Icon } from 'semantic-ui-react';
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
  <div>  
    <Container id="navContainerDesktop">
      <Menu fixed='top' id="navMenuDesktop">
        <Menu.Item header><h3>Robin Bertuccelli <br /> Web Developer </h3></Menu.Item>
        <Menu.Item 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>

        <Link to="/" className="nav-link">  <h3>Home</h3> </Link> 
           </Menu.Item> 

    
      <Menu.Item
        name='portfolio'
        active={activeItem ==='portfolio'}
        onClick={this.handleItemClick}>
        <Link to='/portfolio' className='nav-link'> <h3>Portfolio</h3> </Link>
      </Menu.Item>

        <Menu.Item 
          name='resume' 
          active={activeItem === 'resume'} 
          onClick={this.handleItemClick}>
          <Link to="/resume" className="nav-link">  <h3>Resume</h3> </Link>
         </Menu.Item>

         <Menu.Item name='contact' 
          active={activeItem === 'contact'} 
          onClick={this.handleItemClick}>
          <Link to="/contact" className="nav-link">  <h3>Contact</h3> </Link>
         </Menu.Item>

        <Menu.Menu position='right'>
        	<Menu.Item name='facebookLink' active={activeItem === 'facebookLink'} onClick={this.handleItemClick} >
           <a href="https://www.facebook.com/robin.bertuccelli/" rel="noreferrer noopener" target="_blank" className="nav-link" title="Facebook"> <Image src={require('../../assets/images/icons/if_facebook.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='githubLink' active={activeItem === 'githubLink'} onClick={this.handleItemClick} >
           <a href="https://github.com/robinb242" rel="noreferrer noopener" target="_blank" className="nav-link" title="Github"> <Image src={require('../../assets/images/icons/if_social-github.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='linkedinLink' active={activeItem === 'linkedinLink'} onClick={this.handleItemClick} >
           <a href="https://www.linkedin.com/in/robin-bertuccelli/" rel="noreferrer noopener" target="_blank" className="nav-link" title="LinkedIn"> <Image src={require('../../assets/images/icons/if_linkedin.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='IMMDBLink' active={activeItem === 'IMDBLink'} onClick={this.handleItemClick} >
           <a href="https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1" rel="noreferrer noopener" target="_blank" className="nav-link" title="Internet Movie Database"> <Image src={require('../../assets/images/icons/imdb.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  </div>

    <div>
      <Container id="navContainerMobile">
          <Menu vertical id= "navMenuMobile"><h3>Robin Bertuccelli</h3>
            <Dropdown item icon='list' simple id="navDropdownMobile">
              <Dropdown.Menu>

                 <Dropdown.Item  
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}>
                  <Link to="/" className="nav-link">  <h3>Home</h3> </Link>
                  </Dropdown.Item>


                <Dropdown.Item  
                  name='portfolio'
                  active={activeItem ==='portfolio'}
                  onClick={this.handleItemClick}>
                  <Link to='/portfolio' className='nav-link'> <h3>Portfolio</h3> </Link>
                </Dropdown.Item>

                
                <Dropdown.Item
                  name='resume' 
                  active={activeItem === 'resume'} 
                  onClick={this.handleItemClick}>
                  <Link to="/resume" className="nav-link">  <h3>Resume</h3> </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  name='contact' 
                  active={activeItem === 'contact'} 
                  onClick={this.handleItemClick}>
                  <Link to="/contact" className="nav-link">  <h3>Contact</h3> </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  name='facebookLink' active={activeItem === 'facebookLink'} 
                  onClick={this.handleItemClick}>
                  <a href="https://www.facebook.com/robin.bertuccelli/" rel="noreferrer noopener" target="_blank" className="nav-link" title="Facebook">
                    <Image src={require('../../assets/images/icons/if_facebook.png')}  alt="Facebook" size='mini' />
                  </a> 
                </Dropdown.Item>

                <Dropdown.Item
                  name='githubLink' active={activeItem === 'githubLink'} 
                  onClick={this.handleItemClick} >
                  <a href="https://github.com/robinb242" rel="noreferrer noopener" target="_blank" className="nav-link" title="Github">
                    <Image src={require('../../assets/images/icons/if_social-github.png')}  alt="Facebook" size='mini' /> 
                  </a> 
                </Dropdown.Item>

                <Dropdown.Item
                  name='linkedinLink' active={activeItem === 'linkedinLink'} 
                  onClick={this.handleItemClick} >
                  <a href="https://www.linkedin.com/in/robin-bertuccelli/" rel="noreferrer noopener" target="_blank" className="nav-link" title="LinkedIn">
                    <Image src={require('../../assets/images/icons/if_linkedin.png')}  alt="Facebook" size='mini' /> </a> 
                  </Dropdown.Item>

                <Dropdown.Item
                  name='IMMDBLink' active={activeItem === 'IMDBLink'} onClick={this.handleItemClick} >
                  <a href="https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1" rel="noreferrer noopener" target="_blank" className="nav-link" title="Internet Movie Database">
                  <Image src={require('../../assets/images/icons/imdb.png')}  alt="Facebook" size='mini' /> </a> 
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Menu>
      </Container>
    </div>
    </div>
    
    )
  }
}
