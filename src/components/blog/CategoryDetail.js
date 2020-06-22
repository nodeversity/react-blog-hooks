import React, { useState } from 'react';

const CategoryDetail = () => {
    const [category, setCategory] = useState('');
    const [posts, setPosts] = useState([])
    return(
        <div>
            <h3>Category: { category.name} </h3>
        </div>
    )
}

export default CatgeoryDetail