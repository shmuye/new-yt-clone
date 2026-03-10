import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { usePlaylistItems } from '../Hooks/usePlaylistItems';
import { usePlaylistInfo } from '../Hooks/usePlaylisInfo';
import PlaylistItems from '../Components/PlayListItem';


const Playlist = () => {
    const { channelId, playlistId } = useParams()
    const { playListInfo, showDesc, setShowDesc, fetchPlaylistInfo } = usePlaylistInfo()
    const { playlistItems, fetchPlaylistVideos } = usePlaylistItems()


    useEffect(() => {
        fetchPlaylistInfo(playlistId!)
        fetchPlaylistVideos(playlistId!)
    }, [])


    return (
        <div className="relative">

            {/* modal */}
            {
                showDesc && playListInfo?.description &&
                <div className="z-[10] fixed inset-0 bg-black/60 flex items-start justify-center pt-16 px-4">

                    <div className="relative flex flex-col gap-2 items-end w-full max-w-[640px] max-h-[80vh] bg-neutral-800 rounded-xl p-5 sm:p-8 overflow-y-auto">
                        <div>
                            <AiOutlineClose
                                onClick={() => setShowDesc(false)}
                                className='text-2xl text-neutral-200 cursor-pointer' />
                        </div>
                        <p className='text-lg whitespace-pre-line'>{playListInfo?.description}</p>
                    </div>
                </div>
            }

            <div className='w-[90%] mx-auto sm:mt-8 mt-4'>
                <div className="bg-neutral-900 md:p-5 p-3 rounded-xl flex flex-col md:flex-row gap-4">
                    {/* image */}
                    <div className="md:w-[360px] md:shrink-0">
                        <img
                            src={playListInfo?.thumbnail}
                            className="w-full aspect-[16/9] object-cover bg-neutral-900 rounded-md"
                            alt=""
                        />
                    </div>
                    {/*details */}
                    <div className="min-w-0 flex flex-col gap-2">
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold'>{playListInfo?.title}</h1>

                        {playListInfo?.description &&
                            <div className="">
                                <p className='line-clamp-3 text-neutral-400 whitespace-pre-line'>{playListInfo?.description}</p>
                                <button
                                    onClick={() => setShowDesc(true)}
                                    className='font-semibold'>more</button>
                            </div>
                        }
                    </div>
                </div>

                <PlaylistItems videos={playlistItems.videos} channelId={channelId!} />

            </div>
        </div>
    )
}

export default Playlist