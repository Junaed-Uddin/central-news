import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import CarouselItem from './CarouselItem';

const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        createUser(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='text-start mt-4'>
            <ButtonGroup vertical variant='text-center'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2 rounded outline-primary' style={{width:'304px'}}><FaGoogle /> Google Sign in</Button>
                <Button variant="outline-dark" className='rounded'><FaGithub /> GitHub Sign in</Button>
            </ButtonGroup>
            <p className='mt-4 mb-2'>Find Us On</p>
            <ListGroup className='text-start'>
                <ListGroup.Item className='mb-2 rounded shadow-sm'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded shadow-sm'><FaYoutube /> YouTube</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded shadow-sm'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded shadow-sm'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded shadow-sm'><FaDiscord /> Discord</ListGroup.Item>
            </ListGroup>
            <div className='mt-2'>
                <CarouselItem></CarouselItem>
            </div>
        </div>
    );
};

export default RightSideNav;