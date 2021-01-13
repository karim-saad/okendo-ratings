import React, { Component } from 'react';

class ButtonStandout extends Component {
  render() {
    return (
      <div className='Button-standout'>
        <p className='Button-text'>{this.props.buttonName}</p>
      </div>
    )
  }
}

export default ButtonStandout;
