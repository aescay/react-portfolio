import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './logo3.jpeg'


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto', overflow: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={logo}
                            alt="avatar"
                            className="avatar-img-landing"
                        />


                        <div className="banner-text">
                            <h1>Aspiring Data Scientist</h1>

                        <hr/>

                        <p>
                            Python | R | SQL | Tableau
                        </p>
                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/andrew-escay/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/aescay" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;