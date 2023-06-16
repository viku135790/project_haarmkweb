import React from 'react'
import "./Slider.css"
import {Carousel} from '3d-react-carousal';


const Slider = () => {
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
    return (
        <div className="threedslider carousel-container">
            <Carousel slides={slides} autoplay={true} interval={2000} showArrows={false}/>
        </div>
    )
}

export default Slider