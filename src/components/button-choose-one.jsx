import React, { Component } from 'react';

class ButtonChooseOne extends Component {
  render() {
    return (
      <div className='Button-choose-one'>
        <p className='Button-text'>{this.props.buttonName}</p>
      </div>
    )
  }
}

export default ButtonChooseOne;