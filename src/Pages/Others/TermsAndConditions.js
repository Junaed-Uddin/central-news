import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is Our terms and Conditions</h2>
            <Link to='/register'>
                <button className='btn btn-dark mt-3'>Back to Register page</button>
            </Link>
        </div>
    );
};

export default TermsAndConditions;