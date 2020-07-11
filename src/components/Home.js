import React, { useState, useEffect } from 'react';
//import CategoryDetail from './blog/CategoryDetail';
import {Link} from 'react-router-dom';
import PostApi from '../api/PostApi';


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    
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
    
    useEffect(() => {
        getBlogCategories();
        getBlogPosts();
    }, [])

    return(
        <div>
            <h3 style={{ textAlign: 'center' }}> 
                Latest Blog Posts
            </h3>

            
            <div>
                {posts.map(post => {
                    return (
                        <p key={post.id}>
                            <Link to={`/${post.id}`}>
                               { post.title }
                            </Link>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}


export default Home;