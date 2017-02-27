import React, { PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class AnimatePage extends PureComponent {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        className="root"
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}>
          {this.props.children} 
      </ReactCSSTransitionGroup>
    )
  }
}