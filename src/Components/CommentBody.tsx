import { BiLike } from "react-icons/bi";
import type { CommentBodyType } from '../utils/Types';

const CommentBody = ({ item }: { item: CommentBodyType }) => {
    return (
        <div className="flex sm:gap-3 gap-2">

            {/* Avatar */}
            <img
                src={item.authorProfile}
                className="bg-neutral-900 sm:w-10 sm:h-10 w-9 h-9 aspect-square rounded-full overflow-hidden object-cover"
                alt={item.authorName}
            />

            {/* Comment Content */}
            <div>
                <h1 className="text-xl font-medium">
                    {item.authorName}
                </h1>

                <h2 className="text-neutral-300 whitespace-pre-line text-sm">
                    {item.commentText}
                </h2>

                <div className="flex items-center text-neutral-400 gap-1 cursor-pointer text-sm mt-1">
                    <BiLike />
                    {item.commentLikes}
                </div>
            </div>

        </div>
    )
}

export default CommentBody