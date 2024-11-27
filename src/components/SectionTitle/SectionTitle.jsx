import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12 my-4 '>
            <p className='text-yellow-600'>---{subheading}--</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;