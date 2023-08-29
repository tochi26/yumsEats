import React from 'react'

export const Delivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-full mx-auto md:max-w-[1240px] grid md:grid-cols-2 gap-6'>
                <img className='w-full mx-auto md:my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt="App Screenshot" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Get The App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limtless Convenience on-demand</h1>
                    <p>
                        Craving something scrumptious? Look no further! DeliFusion is here to tantalize your taste buds and bring the world of flavors right to your doorstep. Whether you're in the mood for a sizzling slice of pizza, a crunchy taco fiesta, or a wholesome garden-fresh salad, we've got it all covered.

                        🚴💨 Hungry, but don't want to leave your cozy couch? DeliFusion's got your back. With just a few taps on your phone, you can explore a myriad of cuisines and restaurants, all ready to whisk you away on a culinary journey.

                        🤖🍔 Our smart AI-powered food recommendation system learns your preferences faster than you can say "extra cheese," ensuring every meal suggestion is a delightful surprise tailored just for you.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
