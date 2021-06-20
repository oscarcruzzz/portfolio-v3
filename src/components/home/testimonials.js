import React from 'react'

const Testimonials = () => {
    return (
        <section className="bg-light py-5 columns is-flex is-justify-content-center">
            <div className="background-testimonials bebas">
                Testimonials
            </div>
            <span className="has-text-black" style={{position:"absolute",right:"30px"}}> View all</span>
            <div className="is-align-items-center column is-half is-flex is-centered" style={{zIndex:"2"}}>
                <figure className="image is-128x128 is-flex is-align-items-center">
                    <img src="https://via.placeholder.com/128" alt="" className="is-rounded"/>
                </figure>
                <div className="ml-5">
                    <h4 className="bebas has-text-danger is-size-3">Lorem ipsum dolor amet</h4>
                    <span className="bebas has-text-black   ">Abbits</span>
                    <p className="has-text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos praesentium, tempore ex vel sapiente distinctio harum eos laborum magnam, nobis nam adipisci, aperiam recusandae sed aut. Eum impedit repellendus quo!</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
