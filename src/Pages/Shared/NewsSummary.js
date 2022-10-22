import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummary = ({ news }) => {
    const { _id, author, details, image_url, total_view, rating, title } = news;

    return (
        <Card className="text-start my-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <div>
                        <Image roundedCircle className='img-fluid me-2'
                            src={author.img} style={{ height: '60px', objectFit: 'contain' }}
                        ></Image>
                    </div>
                    <div>
                        <p className='mb-0 fw-bold'>{author.name}</p>
                        <p className='mb-1 text-muted'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-1'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Image rounded className='img-fluid w-100 mt-2 mb-3'
                    src={image_url}
                ></Image>
                <div>
                    {
                        details.length > 300 ?
                            <div>{details.slice(0, 300) + '...'} <Link to={`/news/${_id}`}>Read More</Link></div> :
                            <p>{details}</p>
                    }
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className='flex justify-content-center align-items-center'>
                    <FaStar className='text-warning me-2 mb-1'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaRegEye className='me-2 mb-0'></FaRegEye>
                    <span className=''>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;