import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo={
                email: result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className='space-x-5 text-center'>
                <button onClick={handleSignIn} className='text-2xl items-center'>
                    <FcGoogle>
                    </FcGoogle></button>
                <button className='text-2xl items-center text-blue-500'>
                    <FaFacebook/>
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;