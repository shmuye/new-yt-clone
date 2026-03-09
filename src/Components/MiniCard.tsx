import type { HomeVideoCardType } from '../utils/Types'
import { Link } from 'react-router-dom'

const MiniCard = ({ item }: { item: HomeVideoCardType }) => {
    return (
        <Link to={`/watch/${item.videoId}/${item.channelInfo.id}`}>
            <div className='flex gap-3 hover:scale-[101%] duration-200 ease-in-out'>
                <div className="relative min-w-fit">
                    <span className='sm:text-md text-sm absolute bottom-1 right-1 bg-[#0c0c0cd0] px-2 py-0.5 rounded'>{item.videoDuration}</span>
                    <img src={item.videoThumbnail} className='w-40 aspect-[16/9] object-cover rounded' alt="" />
                </div>
                <div className="">
                    <h1 className='text-md'>{item.videoTitle}</h1>
                    <div className="text-sm text-gray-400">
                        <h2>{item.channelInfo.name}</h2>
                        <div className="flex gap-1 items-center">
                            <h2>{item.videoViews}</h2>
                            <span className='w-[4px] h-[4px] bg-gray-400 '></span>
                            <h2>{item.videoAge}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MiniCard