import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8'>
            <SectionTitle
            subheading={'Check it out'}
            heading={'FEATURED ITEM'}></SectionTitle>
            <div className='md:flex justify-center bg-slate-400 bg-opacity-40 items-center pt-10 py-12 px-36 pb-20'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2024</p>
                    <p className='uppercase'>Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem, deleniti vitae ut eius totam quae, voluptates velit iste, illum quibusdam sit. Consequuntur veniam adipisci nisi itaque officia, similique at id consectetur, placeat natus omnis quis maxime corrupti error voluptatem architecto quasi, nihil sit. Architecto cupiditate culpa eveniet ut perferendis.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;