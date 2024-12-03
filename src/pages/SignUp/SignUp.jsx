import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/socialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated');
                        // create user entry
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created  Successfully',
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 ">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" />{errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='PhotoURL' type="text" {...register("photoURL", { required: true })} placeholder="Photo Url" className="input input-bordered" />{errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />{errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />{errors.password && <span className="text-red-600">Password Must Be 6  more than Character</span>}

                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type='submit' value='Sign Up' />
                                </div>
                                <p><small>Already have An Account? <Link to='/login'>Login Please</Link> </small></p>
                                <p className="text-center pt-2">Or signUp with</p>
                                <SocialLogin></SocialLogin>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;