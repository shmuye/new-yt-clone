import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getActvitiesVideos, getSearchVideos } from '../utils/api'
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper'
import type { HomeVideoCardType } from '../utils/Types'
import Card from '../Components/Card'

const Search = ({ setSearch }: { setSearch: (q: string) => void }) => {
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("query")
    const [searchList, setSearchList] = useState<HomeVideoCardType[] | null>()

    const fetchSearchVideos = async () => {
        const searchVideosData = await getSearchVideos(searchQuery!)
        console.log(searchVideosData)

        const videoIds: string[] = []

        searchVideosData.items.forEach((item: { id: { videoId?: string } }) => {
            if (item.id.videoId) {
                videoIds.push(item.id.videoId)
            }
        });

        const VideosData = await getActvitiesVideos(videoIds)
        const videosArray = await fetchVideosWithChannels(VideosData.items)
        // console.log("videosArray", videosArray)
        setSearchList(videosArray)

    }

    useEffect(() => {
        if (searchQuery) {
            setSearchList(null)
            fetchSearchVideos()
        }

        return () => {
            setSearchList(null)
            setSearch("")
        }
    }, [searchQuery])


    return (
        <div className="w-[95%] mx-auto md:mt-6 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                searchList?.map((item: HomeVideoCardType) =>
                    <Card key={item.videoId} data={item} />
                )
            }
        </div>
    )
}

export default Search