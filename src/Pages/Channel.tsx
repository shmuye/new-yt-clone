import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useChannel } from '../Hooks/useChannel'
import { AiOutlineClose } from "react-icons/ai";
import ChannelVideoList from '../Components/ChannelVideoList'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Components/Loading'
import ChannelPlaylist from '../Components/ChannelPlaylist'



const Channel = () => {
    const { channelId } = useParams()
    const { category, setCategory, channelInfo, fetchChannelInfo, channelVideoList, channelPlayLists, fetchChanneldata, hasMore } = useChannel()
    const [showDesc, setShowDesc] = useState(false)

    const fetchMoreChanneldata = () => {
        fetchChanneldata(channelId!)
    }

    useEffect(() => {
        fetchChannelInfo(channelId!)
        fetchChanneldata(channelId!)
    }, [category])

    return (
        <div className="relative mb-12">
            
            {showDesc && channelInfo?.description &&
                <div className="z-10 fixed inset-0 bg-black/60 flex items-start justify-center pt-16 px-4">

                    <div className="relative flex flex-col gap-2 items-end w-full max-w-160 max-h-[80vh] bg-neutral-800 rounded-xl p-5 sm:p-8 overflow-y-auto">
                        <div>
                            <AiOutlineClose
                                onClick={() => setShowDesc(false)}
                                className='text-2xl text-neutral-200 cursor-pointer' />
                        </div>
                        <p className='text-lg whitespace-pre-line'>{channelInfo?.description}</p>
                    </div>
                </div>
            }


            <InfiniteScroll
                next={() => fetchMoreChanneldata()}
                hasMore={hasMore}
                dataLength={channelVideoList.videos.length}
                loader={<Loading />}
            >
                <div className='w-[95%] mx-auto md:mt-8 mt-6'>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                       
                        <div className="sm:shrink-0 flex justify-center sm:justify-start">
                            <img
                                src={channelInfo?.thumbnail}
                                className="md:w-52 sm:w-40 w-32 aspect-video-[1/1] object-cover rounded-full"
                                alt=""
                            />
                        </div>
                        
                        <div className="min-w-0">
                            <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold'>{channelInfo?.title}</h1>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 sm:text-lg text-base text-neutral-400 mt-2">
                                <h2>{channelInfo?.customUrl}</h2>
                                <h2>{channelInfo?.subCount} Subscribers</h2>
                                <h2>{channelInfo?.videoCount} Vidoes</h2>
                            </div>
                            {channelInfo?.description &&
                                <div className="">
                                    <p className='max-w-160 line-clamp-3 text-neutral-400 whitespace-pre-line'>{channelInfo?.description}</p>
                                    <button
                                        onClick={() => setShowDesc(true)}
                                        className='font-semibold'>more</button>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="sm:my-3 my-1 ">
                        <button
                            onClick={() => setCategory("videos")}
                            className={`md:w-44 w-32 sm:text-xl text-lg  py-2 font-semibold ${category == "videos" ? "border-b" : ""}`}>Vidoes</button>
                        <button
                            onClick={() => setCategory("playlists")}
                            className={`md:w-44 w-32 sm:text-xl text-lg py-2 font-semibold ${category == "playlists" ? "border-b" : ""}`}>Playlists</button>
                        <hr className='h-1' />
                    </div>

                    {category == "videos"
                        ? <ChannelVideoList channelVideos={channelVideoList!.videos} />
                        : <ChannelPlaylist channelId={channelInfo!.id} channelPlayLists={channelPlayLists!.playlists} />
                    }
                </div>
            </InfiniteScroll>
        </div >
    )
}

export default Channel