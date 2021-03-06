import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostCommentList from './PostCommentList';
import PostApi from '../../api/PostApi'

const PostDetail = (props) => {
    const { postUrl } = useParams();
    const [post, setPost] = useState('');


    const updatePost = () => {
        /** Update this Post's attributes */
    }

    const getPostData = () =>{
        PostApi.getPost(postUrl)
            .then(response => {
                setPost(response.data)
            }, () => {
                console.log(`Post API Response: ${post}`)
            })
            .catch(err => console.log(`API Error: ${err}`))
            .finally(() => {})
    }

    useEffect(() => {
        getPostData()
    }, [post])

    return(
        <>
            <div className="post">
                    <h3 style={{ textAlign: 'center' }}> {post.title} </h3>
                
                <p>
                    { post.body }
                </p>
            
            <h4> Comments posted: </h4>
                    <PostCommentList post={post} postUrl={postUrl} />
            
            </div>
        </>
    )
}

export default PostDetail;