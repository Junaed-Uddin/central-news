import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://central-media-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='mt-3'>
            <h5 className='mb-4 text-start'>News Categories: {categories.length}</h5>
            {
                categories.map(category => <p className='text-start' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;