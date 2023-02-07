import React from 'react';
import Title from './Title.jsx';
import LighthouseText from './LighthouseText.jsx';
import "./lighthouse.scss";

function Lighthouse() {


    return(
        <>
        <div className="lighthouse-container">
        <Title />
        <LighthouseText />
        </div>
        </>
    )
}

export default Lighthouse;
