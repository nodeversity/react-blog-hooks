import React, { useState } from 'react';
import CommentDetail from './/CommentDetail'

const PostCommentList = ({post, comments}) => {
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);


    return (
        <div>
            List of comments referencing this blog post.
            <CommentDetail />
        </div>
    )
}

export default PostCommentList;