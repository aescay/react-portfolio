import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src="https://png2.kisspng.com/20180425/vpe/kisspng-computer-icons-user-profile-5ae05d9102f665.4120686215246534570121.png"
                            alt="avatar"
                            className="avatar-img"
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