import type { PlaylistVideotype } from '../utils/Types'
import { Link } from 'react-router-dom'

const PlaylistItemCard = ({ item, ind, channelId }: { item: PlaylistVideotype, ind: number, channelId: string }) => {
    return (
        <Link to={`/watch/${item.id}/${channelId}`}>
            <div className='col flex flex-col hover:scale-[101%] duration-200 ease-in-out'>
                
                <div className="relative ">
                    <div className="absolute flex gap-2 items-center bg-[#0c0c0cd0] px-2 py-0.5 h-full sm:w-25 w-15">
                        <h3 className='text-center w-full text-xl text-neutral-400'>{ind + 1}</h3>
                    </div>
                    <img src={item.thumbnail} className="bg-neutral-900 object-cover aspect-video-[16/9] rounded" alt="" />
                </div>
               
                <div className="flex flex-col gap-1 mt-1">
                    <h1 className='sm:text-base text-sm line-clamp-1'>{item.title}</h1>
                </div>
            </div >
        </Link>
    )
}

export default PlaylistItemCard