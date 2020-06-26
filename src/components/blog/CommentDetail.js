import React, { useState } from 'react';

const CommentDetail = ({ comment }) => {
    return(
        <div>
            <h5>
                <i> {comment.email} says: </i>
            </h5>
            <h3> {comment.name}</h3>
            <p>
                {comment.body}
            </p>
        </div>
    )
}

export default CommentDetail;