
import type { ChannelPlaylistsType } from '../utils/Types'
import ChannelPlaylistCard from './ChannelPlaylistCard'

const ChannelPlaylist = ({ channelId, channelPlayLists }: { channelId: string, channelPlayLists: ChannelPlaylistsType[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                channelPlayLists.map((item: ChannelPlaylistsType) =>
                    <ChannelPlaylistCard key={item.id} item={item} channelId={channelId} />
                )
            }
        </div>
    )
}

export default ChannelPlaylist