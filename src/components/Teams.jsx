import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800'>
            <Title title='Meet our team' desc='Meet the talented individuals behind our success' />
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {teamData.map((team, index) => (
                    <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                        <img src={team.image} alt="" className='w-12 h-12 rounded-full' />
                        <div className='flex-1'>
                            <h4 className='font-bold text-sm dark:text-white text-gray-800'>{team.name}</h4>
                            <p className='text-xs opacity-60 dark:text-white'>{team.title}</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Teams