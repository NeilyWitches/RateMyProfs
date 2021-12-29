import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id='footer'>
                <div id='footer-text'>
                    <div>Created by Neil Pandya using React-Redux, and Ruby on Rails with a PostgreSQL database.</div>
                    <div>Intended as a clone of the original <em>Rate My Professors</em> website.</div>
                </div>
                <div id='socials'>
                    <a href='https://www.linkedin.com/in/neil-pandya-610588187/' target='_blank' rel='nonreferrer noopener'><img src={window.linkedin} alt="LinkedIn" id='linkedin' /></a>
                    <a href='https://github.com/NeilyWitches' target='_blank' rel='nonreferrer noopener'><img src={window.github} alt="Github" id='github' /></a>
                    <a href='https://angel.co/u/neil-pandya-1' target='_blank' rel='nonreferrer noopener'><img src={window.angel_list} alt="AngleList" id='angel-list' /></a>
                    <a href='https://frosty-fermi-9f5bdd.netlify.app/index.html' target='_blank' rel='nonreferrer noopener'><img src={window.portfolio} alt="Portfolio" id='portfolio' /></a>
                </div>
            </div>
        )
    }
};

export default Footer;