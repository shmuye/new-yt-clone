import { useEffect } from 'react'
import Card from '../Components/Card'

import { useHome } from '../Hooks/useHome'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Components/Loading'

const Home = ({ filter, categoryId }: { filter: string, categoryId: string | null }) => {

    const { homeVideos, error, fetchHomeVideos } = useHome()

    useEffect(() => {
        fetchHomeVideos(filter, categoryId, homeVideos[filter].nextPageToken)
    }, [categoryId])

    return (
        <div>
            {error ? (
                <div className="text-center mt-8 text-xl text-red-500 font-semibold">
                    {error}
                </div>
            ) :
                <InfiniteScroll
                    next={() => fetchHomeVideos(filter, categoryId, homeVideos[filter].nextPageToken)}
                    hasMore={true}
                    dataLength={homeVideos[filter].videos.length}
                    loader={<Loading />}
                >
                    <div className="w-[95%] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {homeVideos[filter].videos?.map(item =>
                            <Card key={item.videoId} data={item} />
                        )}
                    </div>
                </InfiniteScroll>
            }
        </div>
    )
}

export default Home