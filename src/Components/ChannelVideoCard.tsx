import type { HomeVideoCardType } from '../utils/Types'
import { Link } from 'react-router-dom'

const ChannelVideoCard = ({ item }: { item: HomeVideoCardType }) => {
    return (
        <Link to={`/watch/${item.videoId}/${item.channelInfo.id}`}>
            <div className='col flex flex-col hover:scale-[101%] duration-200 ease-in-out'>
                {/* thumbnail */}
                <div className="relative ">
                    <div className="absolute sm:bottom-2 bottom-1 sm:right-2 right-1 sm:text-sm text-[14px] bg-[#0c0c0cd0] px-2 py-0.5 rounded">{item.videoDuration}</div>
                    <img src={item.videoThumbnail} className="bg-bg-neutral-900 object-cover aspect-[16/9] rounded" alt="" />
                </div>
                {/* title */}
                <div className="flex flex-col gap-1 mt-1">
                    <h1 className='text-md line-clamp-1'>{item.videoTitle}</h1>
                    <div className="sm:flex gap-3 text-sm text-gray-400">
                        <h2>{item.videoViews}</h2>
                        <h2>{item.videoAge}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ChannelVideoCard