import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { HomeVideoCardType } from '../utils/Types'
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper'
import Comments from '../Components/Comments'
import { getActivities, getActvitiesVideos, getVideoDetails } from '../utils/api'
import VideoDetails from '../Components/VideoDetail'
import MiniCard from '../Components/MiniCard'

const Watch = () => {
    const { videoId, channelId } = useParams()
    const [activities, setActivities] = useState<HomeVideoCardType[]>()
    const [details, setDetails] = useState<HomeVideoCardType>()

    const fetchDetails = async () => {
        try {
            const res = await getVideoDetails(videoId!)
            const videoDetails = await fetchVideosWithChannels(res)
            setDetails(videoDetails[0])
        } catch (error) {}
    }

    const fetchActivities = async () => {
        try {
            const response = await getActivities(channelId!)
            const videoIds: string[] = []

            response.items.forEach(
                (item: {
                    contentDetails: {
                        upload?: { videoId: string },
                        playlistItem?: { resourceId: { videoId: string } }
                    }
                }) => {
                    if (item.contentDetails.upload) {
                        videoIds.push(item.contentDetails.upload.videoId)
                    }
                }
            )

            const vidResponse = await getActvitiesVideos(videoIds!)
            const videosArray = await fetchVideosWithChannels(vidResponse.items)
            setActivities(videosArray)
        } catch (error) {}
    }

    useEffect(() => {
        fetchDetails()
        fetchActivities()
    }, [videoId, channelId])

    return (
        <div className="w-[95%] mx-auto mt-6 mb-12 overflow-x-hidden">

            <div className="flex flex-col lg:flex-row gap-4">

                {/* Main video and comments */}
                <div className="lg:flex-1 lg:min-w-0">

                    <iframe
                        className="w-full aspect-video bg-neutral-900 rounded-md"
                        src={`https://www.youtube.com/embed/${details?.videoId}?autoplay=1`}
                        title="YouTube video player"
                        allow="autoplay; picture-in-picture;"
                        allowFullScreen
                    ></iframe>

                    <VideoDetails details={details} />

                    {/* Desktop comments */}
                    <div className="lg:block hidden mt-4">
                        <Comments videoId={details?.videoId} />
                    </div>
                </div>

                {/* Recommended videos */}
                <div className="lg:w-[420px] lg:shrink-0 flex flex-col gap-3 lg:mt-0 mt-3">
                    {activities?.map((item) => (
                        <MiniCard key={item.videoId} item={item} />
                    ))}
                </div>

                {/* Mobile comments */}
                <div className="block lg:hidden mt-3">
                    <Comments videoId={details?.videoId} />
                </div>

            </div>
        </div>
    )
}

export default Watch