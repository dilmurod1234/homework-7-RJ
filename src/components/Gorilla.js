import React, { Component } from 'react'

class Gorilla extends Component {
    render() {
        return (
            <div style={{ width: "200px", padding: "20px 10px", border: "2px solid" }}>
                <h3 style={{ marginBottom: "10px" }}>Gorilla</h3>
                <strong>Gorilla beringei</strong>
                <br />
                <b style={{ marginBottom: "20px" }}>205kg</b>
                <p style={{ marginBottom: "10px" }}>plants, insects</p>
                <button style={{ padding: "5px" }}>More info</button>
            </div>
        )
    }
}

export default Gorilla