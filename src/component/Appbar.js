import React, { PureComponent } from 'react';
import '../iconfont/material-icons.css';

class Appbar extends PureComponent {
  onBack = ()=>{
      this.props.goBack()
  }  
  render() {
    return (
      <div className="appbar">
          <a className="appbtn center" onClick={this.onBack} ><i className="material-icons">keyboard_arrow_left</i></a>
          <span>{this.props.title}</span>
      </div>
    )
  }
}

export default Appbar
