import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testtimonials from './Testimonials/Testtimonials';
import Bistroboss from './BistroBoss/Bistroboss';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>                
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Bistroboss></Bistroboss>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testtimonials></Testtimonials>
        </div>
    );
};

export default Home;