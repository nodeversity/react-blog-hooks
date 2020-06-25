import React, { useState, useEffect } from 'react';
//import CategoryDetail from './blog/CategoryDetail';

import PostApi from '../api/PostApi';


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getBlogCategories();
        getBlogPosts();
    }, [])
    
    const getBlogCategories = () => {
        /** Get list of Blog Categories; simulated */
        const categories = [
            {
                'name': 'Poetry',
                'id': 1
            },
            {
                'name': 'Pursuit of Life',
                'id': 2
            },
            {
                'name': 'Dialogue',
                'id': 3
            }
        ];
    
        setCategories(categories);
    }
    
    const getBlogPosts = () => {
        /** Fecth list of Blog Posts from jsonplaceholder.typicode.com/posts API backend */
        PostApi.getAllPosts()
            .then(response => {
                setPosts(response.data)
            }, () => {
                console.log(`posts: ${posts}`)
            })
            .catch(err => console.log(`API Error: ${err}`))
            .finally(() => {})
    }
    
    

    return(
        <div>
            Home component.
            <p>
                List of Blog Categories.
            </p>
            <ul>
                {categories.map(category => {
                    return(
                        <li key={category.id}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>
            <p>
                Number of posts: { posts.length }
            </p>
            <div>
                {posts.map(post => {
                    return (
                        <p key={post.id}>
                            {post.title}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}


export default Home;