

import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FootCarD = ({ item }) => {
    const { name, image, price, recipe,_id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const[,refetch] = useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch the cart to update the count
                    refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "Your are not Logged In",
                text: "Please Login to add to the Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to login page
                    navigate('/login',{state: {from: location}});
                }
            });

        }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>z
                <p className='absolute bg-slate-700 px-3 rounded-sm text-white right-0 mr-5 mt-5 '>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={ handleAddToCart} className="btn w-full bg-slate-100 btn-outline border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootCarD;