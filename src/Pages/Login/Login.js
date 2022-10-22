import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { userLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                form.reset();
                if (user?.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Successfully Login');
                }
                else {
                    toast.error("Please verify your email");
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
        })
    }

    return (
        <Container>
            <Row className='flex justify-content-center align-content-center text-start' style={{ height: '100vh' }}>
                <Col xs={12} sm={8} md={6} lg={4}>
                    <h3 className='text-center text-primary my-3'>Login Now</h3>
                    <Form onSubmit={handleUserLogin} className='border rounded-3 p-4 shadow-lg'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100 mt-1' variant="primary" type="submit">
                            Login
                        </Button>
                        <div muted className='mt-2'>
                            <span><small> New to a Website? <Link to='/register' style={{ textDecoration: 'none' }}>Sign up here</Link></small></span>
                        </div>
                        <div muted className='mt-1'>
                            <span className='text-danger'><small>{error}</small></span>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;