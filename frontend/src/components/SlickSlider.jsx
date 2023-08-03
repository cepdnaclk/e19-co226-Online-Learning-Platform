import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card';

const SlickSlider = ({ listOfItems }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <div className='mt-2 mb-8'>
            <Slider {...settings} className='p-2'>

                {listOfItems.map((course, index) => (
                    <div className='p-2' key={index}>
                        <Card
                            imageSrc={course.imageSrc}
                            title={course.courseName}
                            subTitle={course.category}
                            greenText={course.price}
                            buttonText={course.buttonText}
                        />
                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default SlickSlider;
