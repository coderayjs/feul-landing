import React from 'react';
import process from '../assets/img/process.png';

const PhoneMap = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-4 mb-2'>How to GoFuel?</h2>
            <div className='image-container'>
                <div className='image-container' style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom:"40px" }}>
                    <img src={process} alt="Download Image" width={700} style={{ maxWidth: '100%' }} /> 
                </div>
            </div>
        </div>
    );
};

export default PhoneMap;
