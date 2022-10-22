import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
const auth = getAuth();

const Profile = () => {
    const { user, } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoUrlRef = useRef(user?.photoURL);

    const handleProfileChange = event => {
        event.preventDefault();

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrlRef.current.value
        })
            .then(() => {
                toast.success('Profile Updated');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const updateName = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <h4 className='mt-2'>User Profile</h4>
            <Form onSubmit={handleProfileChange} className='border p-4 mt-3 rounded-2 text-start'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={updateName} defaultValue={name} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default Profile;