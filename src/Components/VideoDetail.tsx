import { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import type { HomeVideoCardType } from '../utils/Types';
import { Link } from 'react-router-dom';

function VideoDetails({ details }: { details?: HomeVideoCardType }) {
    const [showDescripton, setShowDescription] = useState(false)

    return (
        <div className='flex flex-col gap-2 mt-2 mx-1'>
            
            <h1 className='text-lg sm:text-xl font-semibold leading-snug tracking-tight'>{details?.videoTitle}</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                
                <div className="flex items-center gap-3 min-w-0">
                    <Link to={`/channel/${details?.channelInfo.id}`}>
                        <img src={details?.channelInfo.image} className="w-12 aspect-video rounded-full object-cover hover:scale-[108%] duration-200 ease-in-out" alt="" />
                    </Link>
                    <div className="flex flex-col text-sm sm:text-base min-w-0">
                        <h2 className='font-semibold truncate'>{details?.channelInfo.name}</h2>
                        <h2 className="text-neutral-300">{details?.channelInfo.subCount} subscribers</h2>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-2 text-sm sm:text-base cursor-pointer" >
                    <div className="flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-full">
                        <BiLike className="text-base sm:text-lg" />
                        <span className='h-5 border border-neutral-600'></span>
                        <span className="font-medium">{details?.videoLikes}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-full">
                        <FaShare className="text-base sm:text-lg" />
                        <span className="font-medium">Share</span>
                    </div>

                </div>
            </div>

            <div className="sm:text-lg text-base bg-neutral-700 px-3 py-2 rounded-xl">
                <p className={`whitespace-pre-line ${showDescripton ? "" : "line-clamp-3"}`}>{details?.videoDescription}</p>
                {!showDescripton ?
                    <button onClick={() => setShowDescription(true)}>...more</button>
                    :
                    <button onClick={() => setShowDescription(false)}>...less</button>
                }
            </div>
        </div >
    )
}

export default VideoDetails