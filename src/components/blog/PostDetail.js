import React, { useState } from 'react';
import PostCommentList from './PostCommentList';


const PostDetail = () => {
    const [post, setPost] = useState('');

    return(
        <>
            <div>
                <h3> Post: {post.title} </h3>
            </div>
            <div>
                <h4> Comments posted</h4>
                <PostCommentList />
            </div>
        </>
    )
}

export default PostDetail;