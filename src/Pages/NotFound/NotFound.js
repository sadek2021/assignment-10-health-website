import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center notFound">
            <h1><span className="text-color">404</span> Page Not Found</h1>
            <p>The requested page could not be found but may be available again in the future</p>
        </div>
    );
};

export default NotFound;