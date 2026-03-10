import { useState, useEffect } from 'react'
import type { CommentBodyType } from '../utils/Types'
import CommentCard from './CommentCard'
import { getVideoComments } from '../utils/api'
import { parseComments } from '../utils/parseData'

interface CommentState {
    comments: CommentBodyType[],
    nextPageToken: string | null
}

const Comments = ({ videoId }: { videoId?: string }) => {

    const [commentList, setCommentList] = useState<CommentState>({
        comments: [],
        nextPageToken: null
    })

    const fetchComments = async () => {
        try {

            const commentsResponse = await getVideoComments(
                videoId!,
                commentList.nextPageToken!
            )

            const items = commentsResponse.items

            const commentsData = parseComments(items)

            setCommentList(prev => ({
                comments: [...prev.comments, ...commentsData],
                nextPageToken: commentsResponse.nextPageToken
            }))

        } catch (error) {
            console.error(`Error fetching the comments`)
        }
    }

    useEffect(() => {
        if (videoId) {
            fetchComments()
        }
    }, [videoId])


    return (
        <div className="mt-3 flex flex-col gap-4">

            <h1 className="md:text-xl sm:text-lg text-base font-semibold px-4">
                Comments
            </h1>

            {
                commentList?.comments?.map((comment: CommentBodyType) =>
                    <CommentCard key={comment.commentId} comment={comment} />
                )
            }

            <button
                className="text-neutral-400 hover:underline px-4"
                onClick={() => fetchComments()}
            >
                Show more...
            </button>

        </div>
    )
}

export default Comments