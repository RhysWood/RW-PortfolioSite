import React from 'react';
import LighthouseText from './LighthouseText';
import "./lighthouse.scss";
import "./title.scss";
import ISS from '../InternationalSpace/ISS';

function Title() {
  
    
    return(
      <div data-scroll-container>
      <div className='my-wrap' data-scroll-section="">
        <span class="lerp-wrap" data-scroll="">
          <span data-scroll="" data-scroll-delay="0.09" data-scroll-speed="6">L</span>
          <span data-scroll="" data-scroll-delay="0.07" data-scroll-speed="6">-</span>
          <span data-scroll="" data-scroll-delay="0.07" data-scroll-speed="6">H</span>
          <span data-scroll="" data-scroll-delay="0.04" data-scroll-speed="6">O</span>
          <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="6">U</span>
          <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="6">S</span>
          <span data-scroll="" data-scroll-delay="0.04" data-scroll-speed="6">E</span>
          <span data-scroll="" data-scroll-delay="0.04" data-scroll-speed="6"> </span>
          <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="6">L</span>
          <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="6">A</span>
          <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="6">B</span>
          <span data-scroll="" data-scroll-delay="0.04" data-scroll-speed="6">S</span>
        </span>
      </div>
      <LighthouseText />
      <ISS />
    </div>
    )
}

export default Title;
