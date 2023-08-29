import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                    <p>
                        🤖🍔 Our smart AI-powered food recommendation system learns your preferences faster than you can say "extra cheese," ensuring every meal suggestion is a delightful surprise tailored just for you.
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaDribbbleSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Texas</li>
                            <li className='py-2 text-sm'>Abuja</li>
                            <li className='py-2 text-sm'>San Jose</li>
                            <li className='py-2 text-sm'>Europe</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Texas</li>
                            <li className='py-2 text-sm'>Abuja</li>
                            <li className='py-2 text-sm'>San Jose</li>
                            <li className='py-2 text-sm'>Europe</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Texas</li>
                            <li className='py-2 text-sm'>Abuja</li>
                            <li className='py-2 text-sm'>San Jose</li>
                            <li className='py-2 text-sm'>Europe</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Texas</li>
                            <li className='py-2 text-sm'>Abuja</li>
                            <li className='py-2 text-sm'>San Jose</li>
                            <li className='py-2 text-sm'>Europe</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Texas</li>
                            <li className='py-2 text-sm'>Abuja</li>
                            <li className='py-2 text-sm'>San Jose</li>
                            <li className='py-2 text-sm'>Europe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
