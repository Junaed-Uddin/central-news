import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummary';

const Categories = () => {
    const categories = useLoaderData();
    return (
        <div>   
            <h2>This is categories {categories.length}</h2>
            {
                categories.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Categories;