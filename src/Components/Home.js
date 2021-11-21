import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="./images/firstslide.jpg"
                            alt="First slide"
                            width="50%"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="./images/secondslide.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/thirdslide.jpeg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <div className="homeintro">
                    <h1>FOODIE`s</h1>
                    <h3>A restaurant (sometimes known as a diner) is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve the same food.</h3>
                </div>

            </>
        )
    }
}