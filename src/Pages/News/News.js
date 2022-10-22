import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { category_id, author, details, image_url, rating, title } = news;
    return (
        <Card className='mb-4'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='mt-4 mb-1'>
                    <div className='d-flex justify-content-around'>
                        <p><span className='fw-bold'>Author:</span> {author.name}</p>
                        <p><span className='fw-bold'>Published Date:</span> {author.published_date}</p>
                        <div>
                            <FaStar className='text-warning me-2 mb-1'></FaStar>
                            <span>{rating.number}</span>
                        </div>
                    </div>
                </div>
                <Card.Text className='text-start'>
                    {details}
                </Card.Text>
                <div className='text-start'>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="outline-primary">Visit the all category news</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default News;