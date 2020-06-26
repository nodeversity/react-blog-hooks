import React, { useState, useEffect } from 'react';
import CommentDetail from './/CommentDetail';
import CommentApi from '../../api/CommentApi';

const PostCommentList = ({ postUrl }) => {
    const [comments, setComments] = useState([]);

    const getCommentsForPost = () => {
        CommentApi.getCommentsForPost(postUrl)
            .then(response => {
                setComments(response.data);
                console.log(`Comments for Post: ${comments}`)
            })
            .catch(err => console.log(`Comments API Error: ${err}`))
            .finally(() => {})

    }

    useEffect(() => {
        getCommentsForPost();
    }, [comments.length,])

    return (
        <div>
            List of comments referencing this blog post.
            {comments.map(comment => (
                <CommentDetail key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default PostCommentList;