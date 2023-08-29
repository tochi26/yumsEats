import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/outline';


const Meal = ({ mealData }) => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
                Our Meal
            </h1>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {mealData.map((item) => (
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                            className='w-full h-[200px] object-cover rounded-lg'
                        />

                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                        </div>

                        <div className='pl-2 py-4 -mt-7'>
                            <p className='flex items-center text-indigo-600'>View More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meal;
