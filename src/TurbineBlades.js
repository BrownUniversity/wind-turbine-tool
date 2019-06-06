import React from 'react';
import ReactAnimationFrame from 'react-animation-frame';
import './TurbineBlades.css';

class TurbineBlades extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        angle: 0
      }
    }

    onAnimationFrame(time) {
        const speed = Math.abs(this.props.speed) > 1 ? 1 : Math.abs(this.props.speed);

        this.setState({
          angle:  (this.state.angle + speed * 6) % 360
        })

        this.blades.style.transform = `rotate(${this.state.angle}deg)`;

    }
 
    render() {
        return (
            <svg className="turbine-blades" viewBox="-100 -100 200 200" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width}>
              <defs>
                <symbol  id="Blade" viewBox="-7.87 -100 15.73 100" overflow="visible"> 
                  <polyline class="blade-side-2" points="0,0 2,-2.09 2.25,-100 -2.25,-100 -7.87,-13.48 0,0 		"/>
                  <polygon class="blade-side-1" points="0,-100 2.25,-100 12.87,-13.48 0,0 		"/>              
                </symbol>
              </defs>

              <mask id="blade-center">
                <circle fill="#ffffff" cx="0" cy="0" r="10"/>
              </mask>

              <g ref={node => this.blades = node}>
                <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' transform="rotate(-120)"overflow='visible' />
                <use xlinkHref='#Blade1' width='15.73' height='100' x='-7.87' y='-100' overflow='visible' />
                <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' overflow='visible' />
                <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' transform="rotate(120)" overflow='visible' />
              </g>

              <g className="center">
                <circle className="hub-circle" cx="0" cy="0" r="10"/>
                <polygon className="hub-shine" points="0,0 -10,5 0,12.5 " transform="rotate(180)"mask="url(#blade-center)" />
                <circle className="hub-center" cx="0" cy="0" r="5"/>
              </g>
            </svg>
        );
    }
}

export default ReactAnimationFrame(TurbineBlades);    