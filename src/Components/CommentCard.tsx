import { useState, useEffect } from 'react'
import type { CommentBodyType } from '../utils/Types'
import { getCommetReplies } from '../utils/api'
import { parseReplies } from '../utils/parseData'
import CommentBody from './CommentBody'

const CommentCard = ({ comment }: { comment: CommentBodyType }) => {

    const [replies, setReplies] = useState<CommentBodyType[]>([])

    const fetchReplies = async () => {
        try {
            if (comment.commentRepliesCount) {
                const repliesResponse = await getCommetReplies(comment.commentId)
                const repliesData = parseReplies(repliesResponse)
                setReplies(repliesData)
            }
        } catch (error) {
            console.error(`Error fetching the comment replies`)
        }
    }

    useEffect(() => {
        fetchReplies()
    }, [])

    return (
        <div className="flex flex-col gap-2">

            {/* Main comment */}
            <CommentBody item={comment} />

            {/* Replies */}
            <div className="pl-12 sm:pl-14 flex flex-col gap-2">
                {replies?.map((item) =>
                    <CommentBody key={item.commentId} item={item} />
                )}
            </div>

        </div>
    )
}

export default CommentCard