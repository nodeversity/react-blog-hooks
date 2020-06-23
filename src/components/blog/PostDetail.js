import React, { useState, useEffect } from 'react';
import PostCommentList from './PostCommentList';


const PostDetail = (props) => {
    const [post, setPost] = useState('');

    const updatePost = () => {
        /** Update this Post's attributes */
    }

    useEffect(() => {
        
    }, [])

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