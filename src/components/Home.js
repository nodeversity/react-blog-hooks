import React, { useState } from 'react';
import CategoryDetail from './blog/CategoryDetail';


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

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