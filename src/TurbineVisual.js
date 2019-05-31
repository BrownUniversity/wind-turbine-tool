import React from 'react';
import "./TurbineVisual.css";

function TurbineVisual(props) {
  return (
  <div className="turbine-visual">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice">
      <defs>
          <linearGradient id="linear-gradient" y1="55.2" x2="18.36" y2="55.2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fff" />
              <stop offset="0.41" stopColor="#fdfdfd" />
              <stop offset="1" stopColor="#afafaf" />
          </linearGradient>
          <radialGradient id="sky-gradient" cx="0.33" cy="0.33" r="0.5">
              <stop offset="0.14" stopColor="#bfe4ff" />
              <stop offset="1" stopColor="#83caff" />
          </radialGradient>
          <linearGradient id="mountain-far-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0.47" stopColor="#66625a" />
              <stop offset="1" stopColor="#a59e91" />
          </linearGradient>
          <linearGradient id="mountain-near-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0.41" stopColor="#998978" />
              <stop offset="1" stopColor="#c7b299" />
          </linearGradient>
          <linearGradient id="hills-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0.5" stopColor="#718c5b" />
              <stop offset="1" stopColor="#98b286" />
          </linearGradient>
          <linearGradient id="sea-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0.35" stopColor="#557899" />
              <stop offset="1" stopColor="#77b4e4" />
          </linearGradient>
          <linearGradient id='linear-gradient-6' x1='234.14' y1='699.48' x2='293.43' y2='699.48' xlinkHref='#linear-gradient' />
          <radialGradient id='radial-gradient-2' cx='263.78' cy='295.28' r='14.7' xlinkHref='#linear-gradient' />
          <symbol id="Blade" data-name="Blade" viewBox="0 0 18.36 110.39">
              <path id="blade-1" className="cls-1" d="M9.18,110.39,0,94.45,5.18,3.78A4,4,0,0,1,9.18,0h0a4,4,0,0,1,4,3.78l5.18,90.67Z"
              />
          </symbol>
      </defs>

      <g id="background-layer">
        <rect id="sky" className="sky" width="1920" height="1080" />
        <polygon id="mountain-far" className="mountain-far" points="1920.5 328.22 1858.41 289.54 1811.63 243.85 1749.52 206.86 1702.6 162.78 1601.22 221.8 1487.98 270.69 1383.33 276.74 1277.44 318.19 1177.52 254.51 1065.4 190.34 952.58 231.22 852.85 286.59 746.21 251.82 637.89 235.87 532.41 247.37 425.43 239.46 317.87 243.73 212.06 190.32 105.92 180.63 -0.5 178.6 -0.5 886.54 1920.5 886.54 1920.5 328.22"/>
        <polygon id="mountain-near" className="mountain-near" points="1920.5 309.23 1811.63 312.06 1706.31 335.12 1602.58 285.26 1490.45 305.94 1434.6 261.46 1390.5 214.57 1282.18 162.85 1184.03 254.94 1069.15 310.47 965.46 338.99 853.15 352.88 749.86 278.4 645.37 204.03 535.65 219.27 428.54 215.72 320.8 223.04 216.15 257.29 109.6 215.98 -0.5 200.65 -0.5 887 1920.5 887 1920.5 309.23"/>
        <path id="hills" className="hills" d="M1920.5,1080H-.5V231.2c93.68,3.38,176.47,9.17,265.65,17.55,85.25,8,148.15-5.06,239.77.88,157.6,10.2,322.88-2.07,477.53-19.25,47.73-5.3,66.86-9.94,111.75-8.25,44.56,1.68,84.94,9.39,131.38,10.88,88.79,2.85,174.27-12.65,260.54-10.25,58,1.62,130.75,18.48,193.24,24.15,84.58,7.68,160.59-5,241.14-16.92Z"/>
        <rect id="sea" className="sea" y="790.52" width="1920" height="289.48"/>
      </g>

			<g id='turbine-layer'>
        <path id='tower' className='tower' d='M276,295.28H251.57l-17.43,801.41c0,9.32,59.29,9.32,59.29,0Z' />
        <g id='blades-layer'>
            <use width='18.36' height='110.39' transform='matrix(1.45 0 0 1.45 250.5 136.05)' xlinkHref='#Blade' />
            <use width='18.36' height='110.39' transform='rotate(-120 177.81 154.942) scale(1.45)' xlinkHref='#Blade' />
            <use width='18.36' height='110.39' transform='matrix(-.72 1.25 -1.25 -.72 408.32 363.4)' xlinkHref='#Blade' />
            <circle id='axil' className='axil' cx='263.78' cy='295.28' r='14.7' />
        </g>
    </g>
    </svg>
  </div>
  );
}

export default TurbineVisual;