import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

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

            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
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
                                <input disabled={disabled} className="btn btn-primary" type='submit' value='Login' />
                            </div>
                            <p> <small>New Here ? <Link to='/signup'>Create A new Account</Link></small> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;