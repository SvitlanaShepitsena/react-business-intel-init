import React from 'react';
import Radium from 'radium';
import color from 'tinycolor2';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';

@Radium
export default class Aside extends React.Component {
    render() {

        var links = ['home', 'about', 'contact'];
        return (
            <div style={[rightNav.base]}>
                <Logo/>
                <Nav links={links}/>
            </div>
        )
    }
};


var rightNav = {
    base: {
        backgroundColor: color('red').lighten(15),
        float: 'left',
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        width: 220,
        height: 'auto',
        minHeight: 1100
    },
    ':hover': {
        backgroundColor: color('red').darken(15).setAlpha(.3),

    }
};

