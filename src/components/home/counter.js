import React from "react"

const Counter = () => {    
    
  return (
    <div className="counter-main-container">
      <div className="counter-item">
        <h2>3</h2>
        <span style={{ fontSize:"50px" }}>YEARS</span>
      </div>
      <div className="counter-item">
        <h2>9</h2>
        <span style={{ fontSize: "35px"}}>PROJECTS</span>
      </div>
      <div className="counter-item">
        <h2>6</h2>
        <span style={{  fontSize: "40px" }}>CLIENTS</span>
      </div>
      <div className="counter-item">
        <h2>2</h2>
        <span style={{  fontSize: "30px" }}>LANGUAGES</span>
      </div>
    </div>
  )
}

export default Counter
