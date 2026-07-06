import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from 'motion/react'

const Services = () => {
    const serviceData = [
        {
            title: "Advertising",
            desc: "We help you run ads that convert and scale your business.",
            icon: assets.ads_icon
        },
        {
            title: "Content Marketing",
            desc: "We create content that connects, engages, and converts.",
            icon: assets.marketing_icon
        },
        {
            title: "Content Writing",
            desc: "We write content that tells stories, sells ideas, and builds brands.",
            icon: assets.content_icon
        },
        {
            title: "Social Media",
            desc: "We build communities that care, engage, and grow with your brand.",
            icon: assets.social_icon
        }
    ]
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    transition={{staggerChildren: 0.2}}
    viewport={{once:true}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solution that move your business forward.' />
        <div className='flex flex-col md:grid grid-cols-2'>
            {serviceData.map((service, index)=>(
                <ServicesCard key={index} service={service} index={index}/>
            ))}

        </div>
    </motion.div>
  )
}

export default Services