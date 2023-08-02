import React, { useState, useEffect } from 'react';

import SliderImage1 from "../components/images/SliderImage1.png"
import SliderImage2 from "../components/images/SliderImage2.png"
import SliderImage3 from "../components/images/SliderImage3.png"
import SliderImage4 from "../components/images/SliderImage4.png"
import SliderImage5 from "../components/images/SliderImage5.png"

const ImageSlider = () => {
    const images = [
        SliderImage1,
        SliderImage2,
        SliderImage3,
        SliderImage4,
        SliderImage5,
        // Add image URLs here
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageChange = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleImageChange, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-full h-auto" />
        </div>
    );
};

export default ImageSlider;
