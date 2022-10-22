import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [check, setCheck] = useState(false);
    const { userSignUp, userUpdateProfile, userEmailVerify } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        userSignUp(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                setError('');
                form.reset();
                userUpdateProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => { })
                    .catch(err => console.error(err));

                handleEmailVerify();
                navigate('/login');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleEmailVerify = () => {
        userEmailVerify()
            .then(() => {
                toast.success('Email Verification sent to your email. Please verify your email');
            })
    }

    const handleTermsAndConditions = event => {
        setCheck(event.target.checked)
    }

    return (
        <Container>
            <Row className='flex justify-content-center align-content-center text-start' style={{ height: '100vh' }}>
                <Col xs={12} sm={8} md={6} lg={4}>
                    <h3 className='text-center text-primary my-3'>Registration Now</h3>
                    <Form onSubmit={handleUserSignUp} className='border rounded-3 p-4 shadow-lg'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Enter the photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={handleTermsAndConditions} type="checkbox" label={<>Accept <Link to='/terms' style={{ textDecoration: 'none' }}>Terms and Conditions</Link></>} />
                        </Form.Group>
                        <Button className='w-100 mt-1' variant="primary" type="submit" disabled={!check}>
                            Registration
                        </Button>
                        <div muted className='mt-2'>
                            <span><small>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login here</Link></small></span>
                        </div>
                        <div muted className='mt-1'>
                            <span><small>{error}</small></span>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;