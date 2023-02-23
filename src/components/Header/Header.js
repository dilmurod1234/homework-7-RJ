import React, { Component } from 'react'
import "../Header/header.css"

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h2>{this.props.open}header{this.props.close}</h2>
      </div>
    )
  }
}

export default Header