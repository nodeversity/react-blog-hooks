import React, { useState } from 'react';

const PostCommentList = () => {
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);


    return (
        <div>
            List of comments referencing this blog post.
        </div>
    )
}

export default PostCommentList;