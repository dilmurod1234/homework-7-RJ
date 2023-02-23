import React from 'react'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Section from "./components/Section/Section"
import Lion from "./components/Lion"
import Gorilla from "./components/Gorilla"
import Zebra from "./components/Zebra"

class App extends React.Component {
  render() {
    return (
      <>
        <div style={{ width: "500px", display: "flex", flexDirection: "column", margin: "0 auto", gap: "10px" }}>
          <Header open={"<"} close={">"} />
          <div style={{ display: "flex", gap: "10px" }}>
            <Nav open={"<"} close={">"} />
            <Section open={"<"} close={">"} />
          </div>
          <Footer open={"<"} close={">"} />
        </div>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Animals</h2>
        <div style={{ marginBottom: "100px", display: "flex", justifyContent: "space-around" }}>
          <Lion />
          <Gorilla />
          <Zebra />
        </div>
      </>
    )
  }
}

export default App;