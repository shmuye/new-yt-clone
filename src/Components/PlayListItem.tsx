import type { PlaylistVideotype } from '../utils/Types'
import PlaylistItemCard from './PlaylistItemCard'

const PlaylistItems = ({ videos, channelId }: { videos: PlaylistVideotype[], channelId: string }) => {
    return (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {
                videos.map((item: PlaylistVideotype, ind) =>
                    <PlaylistItemCard key={item.id} item={item} ind={ind} channelId={channelId} />

                )
            }
        </div>)
}

export default PlaylistItems