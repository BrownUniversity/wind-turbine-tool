import React from 'react';
import TurbineTower from './TurbineTower';
import Background from './Background';
import "./TurbineVisual.css";

function TurbineVisual(props) {
  const windVelocity = props.windVelocity <= 15 ? props.windVelocity : 15

  return (
  <div className="turbine-visual">
    <svg className="root-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >      

      <Background altitude={props.altitude} maxAltitude="5000"/>

      {/*Background turbines*/}
      <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="-100" y="910"/>
      <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="240" y="850"/>
      <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="590" y="880"/>

      <TurbineTower windVelocity={windVelocity} towerHeight={props.towerHeight} bladeLength={props.bladeLength} x="-600" y="1000"/>
    </svg>
  </div>
  );

  //Scale is 20 to 35 or (1.5 times)
}

export default TurbineVisual;