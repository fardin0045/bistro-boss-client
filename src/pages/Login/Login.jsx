import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import img from '../../assets/others/authentication2.png'
import SocialLogin from '../../components/socialLogin/SocialLogin';

const Login = () => {

   
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);
    // for page direction
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful ",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, {replace:true});
                  
            })
    }
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="hero bg-base-200  " style={{ boxShadow: '1px 2px 9px #F4AAB9', margin: '4em', padding: '1em' }} >
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                       <img src={img} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm  ">
                        <form onSubmit={handleLogin} className="card-body shadow-none bg-none" >
                            <h2 className='text-2xl font-bold text-center'>Login Now</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="type the captcha" className="input input-bordered"  name='captcha' />
                                {/* <button  className=' mt-2 btn btn-outline btn-xs'>validate</button> */}

                            </div>
                            <div className="form-control mt-6">
                                {/* make disable */}
                                <input disabled={false} className="btn bg-amber-600 text-white " type='submit' value='Login' />
                            </div>
                            <p> <small>New Here ? <Link to='/signup' className='text-red-400 text-center'>Create A new Account</Link></small> </p>
                            <p className='text-center'>Or Sign in with</p>
                            <SocialLogin></SocialLogin>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </>

    );
};

export default Login;