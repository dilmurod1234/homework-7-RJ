import React, { Component } from 'react'
import "../Footer/footer.css"

class Footer extends Component {
    render() {
        return (
            <div className='footer1'>
                <h2 style={{marginBottom:"0"}}>{this.props.open}footer{this.props.close}</h2>
            </div>
        )
    }
}

export default Footer