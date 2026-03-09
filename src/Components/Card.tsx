import React from 'react'
import { Link } from 'react-router-dom'
import { HomeVideoCardType } from '../utils/Types'

function Card({ data }: { data: HomeVideoCardType }) {
    return (
        <div className='flex flex-col gap-3 pb-3 hover:scale-[101%] duration-200 ease-in-out'>
            {/* Thumbnail */}
            <div className="relative">
                <Link to={`/watch/${data.videoId}/${data.channelInfo.id}`}>
                    <img src={data.videoThumbnail} className="aspect-[16/9] w-full object-cover rounded-xl bg-neutral-900" alt="" />
                </Link>
                <span className='absolute sm:bottom-3 bottom-2 sm:right-3 right-2 text-sm bg-[#0c0c0cd0] px-2 py-0.5 rounded'>{data.videoDuration}</span>
            </div>
            {/* details */}
            <div className="flex gap-2 ">
                <Link to={`/channel/${data.channelInfo.id}`}
                    className=' md:h-10 h-8 aspect-[1/1]'>
                    <img src={data.channelInfo.image}
                        alt="" className="bg-gray-300 rounded-full object-cover hover:scale-[108%] duration-200 ease-in-out" />
                </Link>
                <div className="flex flex-col">
                    <h3 className='sm:text-lg text-md line-clamp-2'>{data.videoTitle}</h3>
                    <div className="sm:text-md text-sm">
                        <h4>{data.channelInfo.name}</h4>
                        <div className="flex gap-1">
                            <span>{data.videoViews}</span>
                            <span>.</span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card