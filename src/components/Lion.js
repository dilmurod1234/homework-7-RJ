import React, { Component } from 'react'

class Lion extends Component {
    render() {
        return (
            <div style={{ width: "200px", padding: "20px 10px", border: "2px solid" }}>
                <h3 style={{ marginBottom: "10px" }}>Lion</h3>
                <strong>Panthera leo</strong>
                <br />
                <b style={{ marginBottom: "20px" }}>140kg</b>
                <p style={{ marginBottom: "10px" }}>meat</p>
                <button style={{ padding: "5px" }}>More info</button>
            </div>
        )
    }
}

export default Lion