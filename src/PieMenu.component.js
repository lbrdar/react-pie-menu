// @flow
import React from 'react';

import styles from './PieMenu.style';

type Props = {
  children: any,
  radius: number,
  centerX: number,
  centerY: number,
  centerRadius: number,
  centerStyle: {},
  menuStyle: {},
  contentHeight: number,
  renderCenter: boolean
};

const PieMenu = ({ // eslint-disable-line object-curly-newline
  renderCenter = true,
  radius = 150,
  centerX,
  centerY,
  centerRadius = 50,
  centerStyle = {},
  menuStyle = {},
  contentHeight = 32,
  children,
}: Props) => {
  const centralAngle = children.length ? 360 / children.length : 360;
  const deltaAngle = 90 - centralAngle;
  const startAngle = deltaAngle < 0 ? 45 : deltaAngle + (centralAngle / 2);
  const polar = centralAngle % 180 === 0;
  return (
    <div
      style={
        Object.assign({
          position: (centerX || centerY) ? 'absolute' : 'relative',
          top: `${centerY - radius}px`,
          left: `${centerX - radius}px`,
        }, styles.container, menuStyle)
      }
    >
      <nav style={styles.nav}>
        <ul style={Object.assign({
            width: `${2 * radius}px`,
            height: `${2 * radius}px`,
          }, styles.ul)}
        >
          {React.Children.map(children, (child, i) => {
            const rotate = startAngle + (centralAngle * i);
            const skew = polar ? 0 : deltaAngle;
            const newChild = React.cloneElement(child, {
              containerStyle: Object.assign({
                transform: `skew(${-skew}deg) rotate(${((polar ? 90 : centralAngle) / 2) - 90}deg)`,
                background: `radial-gradient(transparent ${centerRadius}px, rgba(109, 109, 109, 0.925) ${centerRadius}px)`,
              }, child.props.containerStyle),
              focusStyle: Object.assign({
                background: `radial-gradient(transparent ${centerRadius}px, #424242 ${centerRadius}px)`,
                color: 'white',
              }, child.props.focusStyle),
              contentHeight: child.props.contentHeight || contentHeight,
              contentContainerStyle: Object.assign({
                top: `${((radius - centerRadius) / 2) - ((child.props.contentHeight || contentHeight || 0) / 2)}px`,
              }, child.props.contentContainerStyle),
              contentStyle: Object.assign({
                transform: `rotate(${-centralAngle * i}deg)`,
                color: 'black',
              }, child.props.contentStyle),
            });
            return (
              <li style={Object.assign({
                transform: `rotate(${rotate}deg) skew(${skew}deg)`,
              }, styles.li)}
              >
                {newChild}
              </li>
            );
          })}
        </ul>
        { renderCenter && <div style={
          Object.assign({
            top: `calc(50% - ${centerRadius}px)`,
            left: `calc(50% - ${centerRadius}px)`,
            width: `calc(2 * ${centerRadius}px)`,
            height: `calc(2 * ${centerRadius}px)`,
          }, styles.center, centerStyle)
        }
        />
        }
      </nav>
    </div>
  );
};

export default PieMenu;
