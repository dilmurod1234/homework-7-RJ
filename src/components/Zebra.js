import React, { Component } from 'react'

class Zebra extends Component {
    render() {
        return (
            <div style={{ width: "200px", padding: "20px 10px", border: "2px solid" }}>
                <h3 style={{ marginBottom: "10px" }}>Zebra</h3>
                <strong>Equus quaga</strong>
                <br />
                <b style={{ marginBottom: "20px" }}>322kg</b>
                <p style={{ marginBottom: "10px" }}>plants</p>
                <button style={{ padding: "5px" }}>More info</button>
            </div>
        )
    }
}

export default Zebra