import React, { Component } from 'react';
import base, { basePropTypes } from '../base';

class Envelope extends Component {
  static propTypes = {
    ...basePropTypes,
  };

  static variants = {
    default: {
      fill: '#EAEEFB',
      stroke: '#B9C2E4',
    },
    colored: {
      fill: '#EED6FF',
      stroke: '#C48DED',
    },
    error: {
      fill: '#FFB5B2',
      stroke: '#FF5850',
    },
  };

  render () {
    const { alt, style, variant } = this.props;
    const color = Envelope.variants[variant];

    return (
      <svg
        width="11px"
        height="9px"
        viewBox="0 0 11 09"
        alt={alt}
        style={style}
      >
        <g>
          <defs>
            <rect id="path-1" x="0" y="0" width="11" height="8" />
            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="11" height="8" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-714.000000, -594.000000)" stroke={color.stroke}>
              <g transform="translate(241.000000, 370.000000)">
                <g transform="translate(473.000000, 225.000000)">
                  <use mask="url(#mask-2)" strokeWidth="2" fill={color.fill} xlinkHref="#path-1" />
                  <polyline points="0.533320551 0.599345964 5.52216436 3.65714135 10.5638681 0.475880292" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default base(Envelope);