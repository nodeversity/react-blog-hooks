import React, { useState } from 'react';

const PostDetail = () => {
    const [post, setPost] = useState('');

    return(
        <div>
            <h3> Post: {post.title} </h3>
        </div>
    )
}

export default PostDetail;