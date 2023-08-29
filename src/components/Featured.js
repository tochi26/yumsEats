import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
        const newIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        setCurrentIndex(newIndex);
    };

    const moveToNextSlide = () => {
        const newIndex = (currentIndex + 1) % sliders.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            >
                <div className='absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlider} />
                </div>
                <div className='absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={moveToNextSlide} />
                </div>
            </div>
            <div className='flex items-center justify-center mt-4'>
                {sliders.map((sliderItem, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-orange-700' : ''
                            }`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
