import React, { useState, useEffect } from 'react';
import CategoryDetail from './blog/CategoryDetail';

import PostApi from '../api/CommentApi';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    const getBlogCategories = () => {
        /** Get list of Blog Categories; simulated */
        return []
    }

    const getBlogPosts = () => {
        /** Fecth list of Blog Posts from jsonplaceholder.typicode.com/posts API backend */
        return []
    }


    useEffect(() => {
        getBlogCategories();
        getBlogPosts();
    }, [posts, categories])
    
    
    return(
        <div>
            Home component.
            <p>
                List of Blog Categories.
            </p>
        </div>
    )
}

export default Home;