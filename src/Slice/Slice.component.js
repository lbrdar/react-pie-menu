// @flow
import React from 'react';

import styles from './Slice.style';

export type Callback = () => void;

type Props = {
  children: any,
  containerStyle: {},
  focusStyle: {},
  contentContainerStyle: {},
  contentStyle: {},
  contentHeight: number,
  onSelect: Callback,
  onMouseUp: Callback,
  onMouseOver: Callback
};

type State = {
  focused: boolean
};

export default class Slice extends React.Component<Props, State> {
  static defaultProps = {
    contentHeight: 32,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  onMouseOver = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { onMouseOver } = this.props;
    if (onMouseOver) {
      onMouseOver();
    }
    this.setState({ focused: true });
    event.stopPropagation();
  };

  onMouseOut = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { onMouseUp } = this.props;
    if (onMouseUp) {
      onMouseUp();
    }
    this.setState({ focused: false });
    event.stopPropagation();
  };

  render() {
    const {
      children,
      onSelect,
      containerStyle,
      focusStyle,
      contentContainerStyle,
      contentStyle,
      contentHeight,
    } = this.props;
    const { focused } = this.state;
    const { background, ...focusedStyle } = Object.assign({}, focusStyle);
    const focusedBgStyle = { background };
    return (
      <div
        role="button"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onMouseUp={onSelect}
        onClick={e => e.stopPropagation()}
        onFocus={() => {}}
        onBlur={() => {}}
        tabIndex={-1}
        style={Object.assign({}, styles.container, containerStyle)}
      >
        <div style={focused ? Object.assign({}, styles.focus, focusedBgStyle) : {}}>
          <div
            style={Object.assign({
              height: `${contentHeight}px`,
            }, styles.contentContainer, contentContainerStyle)}
          >
            <div style={Object.assign(
                {},
                styles.content,
                contentStyle,
                focused ? focusedStyle : {},
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
