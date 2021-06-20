import React from 'react'
import Button from '../assets/button'

const Project = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <figure>
                            <img src="https://via.placeholder.com/600" alt="" />
                        </figure>
                    </div>
                    <div className="column is-half is-normal">
                        <span className="bebas is-size-2">Website</span>
                        <h2 className="bebas border-font">Ruclock</h2>
                        <p className="open is-size-6 pb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum, accusamus commodi vel ipsa velit reprehenderit assumenda architecto nam corrupti nemo quidem facilis saepe, culpa est. Quisquam voluptatibus voluptate qui! <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est minima eaque alias quasi odit incidunt, laudantium maiores ab expedita qui quod! Fugit magnam debitis corporis excepturi eos a voluptatibus!
                        </p>
                    <div>
                        <Button text="View Project"/>
                        <Button text="Projects"/>
                    </div>
                    </div>
                </div>            
            </div>
        </section>
    )
}

export default Project
