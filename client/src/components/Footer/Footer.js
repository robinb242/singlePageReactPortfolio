import React from 'react'
import { Icon } from 'semantic-ui-react'
import "./Footer.css";

const Footer = () => (

  <div className="ui vertical footer segment" id="footer">
        <div className="ui center aligned container">
            <footer>
                <h5 id="footerTitle"> &copy; Copyright 2018 | All rights reserved | Robin Bertuccelli</h5>
                <a href='https://www.facebook.com/robin.bertuccelli/' target="blank">
                <Icon name='facebook square' size='large' />
                </a>
                <a href='https://www.linkedin.com/in/robin-bertuccelli/' target="blank">
                <Icon name='linkedin square' size='large' />
                </a>
                <a href='https://github.com/robinb242' target="blank">
                <Icon name='github' size='large' />
                </a>
                <a href='https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1' target="blank">
                <Icon name="film" size='large' />
                </a>
            </footer>
           
			
           
        </div>
    </div>
 
);
export default Footer;
 