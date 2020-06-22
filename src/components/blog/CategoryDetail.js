import React, { useState } from 'react';
import PostDetail from './PostDetail';


const CategoryDetail = () => {
    const [category, setCategory] = useState('');
    const [posts, setPosts] = useState([]);

    return(
        <div>
            <h3>Category: { category.name} </h3>
            <PostDetail />
        </div>
    )
}

export default CategoryDetail