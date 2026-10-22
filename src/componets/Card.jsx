import React from 'react'

export const Card = (proms) => {
    return (
        <div>
            <a href={proms.i.url} target='_blank'>
                <div className='h-60 w-60 rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src={proms.i.download_url} alt="" />
                </div>
                <h2 className='font-bold text-2xl mb-5 mt-2'>{proms.i.author}</h2>
            </a>
        </div>
    )
}
