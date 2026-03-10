
import ChannelVideoCard from './ChannelVideoCard'
import type { HomeVideoCardType } from '../utils/Types'

const  ChannelVideoList = ({ channelVideos }: { channelVideos?: HomeVideoCardType[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {channelVideos &&
                channelVideos.map((item: HomeVideoCardType, ind) =>
                    <ChannelVideoCard key={ind} item={item} />
                )
            }
        </div>
    )
}

export default ChannelVideoList