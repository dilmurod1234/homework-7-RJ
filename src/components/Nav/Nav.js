import React, { Component } from 'react'
import "../Nav/nav.css"

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h2>{this.props.open}nav{this.props.close}</h2>
      </div>
    )
  }
}


export default Nav