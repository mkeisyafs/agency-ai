import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const workData = [{
        title: 'Mobile app',
        desc: 'We turn bold ideas into powerful digital solutions that connect engage...',
        image: assets.work_mobile_app
    },
    {
        title: 'Fitness App',
        desc: 'We create intuitive and engaging fitness interfaces that inspire healthy habits.',
        image: assets.work_fitness_app
    },
    {
        title: 'App development',
        desc: 'We create seamless e-commerce experiences that turn visitors into loyal customers.',
        image: assets.work_dashboard_management
    }
    ]
    return (
        <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title='Our Work' desc='Check out some of our recent projects' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl'>
                {workData.map((work, index) => (
                    <div key={index} className='cursor-pointer hover:scale-105 duration-500 transition-all'>
                        <img src={work.image} alt="" className='w-full rounded-xl' draggable={false} />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurWork