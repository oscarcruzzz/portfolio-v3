import React from "react"

const Counter = () => {
  return (
    <section className="counter-container">
      <div className="container">
        <div className="columns">
          <div className="column is-3 is-flex is-align-items-stretch is-justify-content-center">
            <h2>3</h2>
            <span
              className="vertical-text has-text-centered  border-font"
              style={{ fontSize: "4rem" }}
            >
              YEARS
            </span>
          </div>
          <div className="column is-3 is-flex is-align-items-stretch is-justify-content-center">
            <h2>9</h2>
            <span
              className="vertical-text has-text-centered  border-font"
              style={{ fontSize: "2.6rem" }}
            >
              PROJECTS
            </span>
          </div>
          <div className="column is-3 is-flex is-align-items-stretch is-justify-content-center">
            <h2>6</h2>
            <span
              className="vertical-text has-text-centered  border-font"
              style={{ fontSize: "3rem" }}
            >
              CLIENTS
            </span>
          </div>
          <div className="column is-3 is-flex is-align-items-stretch is-justify-content-center">
            <h2>2</h2>
            <span
              className="vertical-text has-text-centered  border-font"
              style={{ fontSize: "2.4rem" }}
            >
              LANGUAGES
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
