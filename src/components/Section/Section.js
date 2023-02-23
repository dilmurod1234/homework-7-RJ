import React, { Component } from 'react'
import "../Section/section.css"

class Section extends Component {
    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <div style={{ display: "flex", border:"2px solid gray" }}>
                    <div>
                        <div className='figure'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figure{this.props.close}</p>
                        </div>
                        <div className='figcaption'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figcaption{this.props.close}</p>
                        </div>
                    </div>
                    <div>
                        <div className='head'>
                            <p style={{marginBottom:"0"}}>{this.props.open}header{this.props.close}</p>
                        </div>
                        <div className='article'>
                            <h3 style={{marginBottom:"0"}}>{this.props.open}article{this.props.close}</h3>
                        </div>
                        <div className='footer'>
                            <p style={{marginBottom:"0"}}>{this.props.open}footer{this.props.close}</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", border:"2px solid gray" }}>
                    <div>
                        <div className='figure'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figure{this.props.close}</p>
                        </div>
                        <div className='figcaption'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figcaption{this.props.close}</p>
                        </div>
                    </div>
                    <div>
                        <div className='head'>
                            <p style={{marginBottom:"0"}}>{this.props.open}header{this.props.close}</p>
                        </div>
                        <div className='article'>
                            <h3 style={{marginBottom:"0"}}>{this.props.open}article{this.props.close}</h3>
                        </div>
                        <div className='footer'>
                            <p style={{marginBottom:"0"}}>{this.props.open}footer{this.props.close}</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", border:"2px solid gray" }}>
                    <div>
                        <div className='figure'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figure{this.props.close}</p>
                        </div>
                        <div className='figcaption'>
                            <p style={{marginBottom:"0"}}>{this.props.open}figcaption{this.props.close}</p>
                        </div>
                    </div>
                    <div>
                        <div className='head'>
                            <p style={{marginBottom:"0"}}>{this.props.open}header{this.props.close}</p>
                        </div>
                        <div className='article'>
                            <h3 style={{marginBottom:"0"}}>{this.props.open}article{this.props.close}</h3>
                        </div>
                        <div className='footer'>
                            <p style={{marginBottom:"0"}}>{this.props.open}footer{this.props.close}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section