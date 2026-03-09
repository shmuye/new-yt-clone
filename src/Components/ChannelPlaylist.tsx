
import type { ChannelPlaylistsType } from '../utils/Types'
import ChannelPlaylistCard from './ChannelPlaylistCard'

function ChannelPlaylist({ channelId, channelPlayLists }: { channelId: string, channelPlayLists: ChannelPlaylistsType[] }) {
    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 gap-y-4">
            {
                channelPlayLists.map((item: ChannelPlaylistsType) =>
                    <ChannelPlaylistCard key={item.id} item={item} channelId={channelId} />
                )
            }
        </div>
    )
}

export default ChannelPlaylist