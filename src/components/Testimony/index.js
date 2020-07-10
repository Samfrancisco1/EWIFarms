import React from 'react'
import { Carousel } from 'react-bootstrap'

import "./index.css";
import Avatar from "../../assets/images/avatar.svg";

export default function Testimony () {

    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <section className="testimony">
                <h2>Testimonies</h2>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 avatar"
                        src={Avatar}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Yabi Francis</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 avatar"
                        src={Avatar}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Damilola Daramola</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 avatar"
                        src={Avatar}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Erin Julianah</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                
            </section>
        </>
    )
}

