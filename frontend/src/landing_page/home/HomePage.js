import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../../OpenAccount';

function HomePage () {

    const location = useLocation(); 

    useEffect(() => {
        if (location.state?.message) {
            alert(location.state.message);
        }
    }, [location]);

    return ( 
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
     );
}

export default HomePage;