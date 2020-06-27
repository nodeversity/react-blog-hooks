import React from 'react';

const CommentDetail = ({ comment }) => {
    return(
        <div className="comment">
            <h5 style={{  left: '0px' }}>
                <i> {comment.email} </i>says: 
            </h5>
            <h3> {comment.name}</h3>
            <p>
                {comment.body}
            </p>
        </div>
    )
}

export default CommentDetail;