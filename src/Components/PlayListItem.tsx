import type { PlaylistVideotype } from '../utils/Types'
import PlaylistItemCard from './PlaylistItemCard'

const PlaylistItems = ({ videos, channelId }: { videos: PlaylistVideotype[], channelId: string }) => {
    return (
        <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 gap-y-4 mt-4">
            {
                videos.map((item: PlaylistVideotype, ind) =>
                    <PlaylistItemCard key={item.id} item={item} ind={ind} channelId={channelId} />

                )
            }
        </div>)
}

export default PlaylistItems