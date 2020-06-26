import React, { useState, useEffect } from 'react';
import CommentDetail from './/CommentDetail'

const PostCommentList = ({ postUrl }) => {
    const [comments, setComments] = useState([]);

    const [comments, setComments] = useState([]);

    const getCommentsForPost = () => {
        CommentApi.getCommentsForPost(postUrl)
            .then(response => {
                setComments(response.data)
            })
            .catch(err => console.log(`Comments API Error: ${err}`))
            .finally(() => {})

    }

    useEffect(() => {

    }, [comments])

    return (
        <div>
            List of comments referencing this blog post.
            {comments.map(comment => (
                <CommentDetail comment={comment} />
            ))}
        </div>
    )
}

export default PostCommentList;