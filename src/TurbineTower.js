import React from 'react';
import TurbineBlades from './TurbineBlades';
import './TurbineTower.css';

class TurbineTower extends React.Component {
    render() {
        const bladeYOffset = 350 - this.props.towerHeight - 600;
        
        const towerHeight = this.props.towerHeight;
        const towerHeightScale = 0.6 * towerHeight / 350 + 0.4;

        return (
            <svg className="turbine-tower" viewBox="-15 0 30 500" preserveAspectRatio="xMidYMax meet" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>
              <g className="tower" >
                <polygon class="tower" points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} ${towerHeightScale * 5},-${towerHeight}`}/>
                <polygon class="tower-shadow" points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} -1,-${towerHeight}`}/>
              </g>
              <TurbineBlades 
                speed={this.props.speed} bladeDiameter={this.props.bladeDiameter}  x="-100" y={bladeYOffset} 
                width="200"
              />
            </svg>
        );
    }
}

export default TurbineTower;