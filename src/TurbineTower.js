import React from 'react';
import TurbineBlades from './TurbineBlades';
import './TurbineTower.css';

class TurbineTower extends React.Component {
    render() {
        //Converts tower height from meters into screen units
        const towerHeight = 350 * this.props.towerHeight / 200;
        const bladeYOffset = 350 - towerHeight - 600;
        const towerHeightScale = 0.6 * towerHeight / 350 + 0.4;

        return (
            <svg className="turbine-tower" viewBox="-15 0 30 500" preserveAspectRatio="xMidYMax meet" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>
              <g className="tower" >
                <polygon className="tower" points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} ${towerHeightScale * 5},-${towerHeight}`}/>
                <polygon className="tower-shadow" points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} -1,-${towerHeight}`}/>
              </g>
              <TurbineBlades 
                windVelocity={this.props.windVelocity} bladeLength={this.props.bladeLength}  x="-100" y={bladeYOffset} 
                width="200"
              />
            </svg>
        );
    }
}

export default TurbineTower;