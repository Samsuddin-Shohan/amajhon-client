import React from 'react';
import notFound from './../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <img
                src={notFound}
                alt=''
                style={{ width: '50%', margin: '10px' }}
            />
        </div>
    );
};

export default NotFound;
