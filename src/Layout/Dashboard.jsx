import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaMarkdown, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { MdContactPhone, MdRestaurantMenu, MdShop } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCart();

    // todo : get is admin value
    const [isAdmin] = useAdmin();


    return (
        <div className='flex '>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-amber-400">
                <ul className='menu'>

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/addItems'><MdRestaurantMenu/> Add Items</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaList/> Manage Items</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/bookings'><FaCalendar></FaCalendar> Manage Booking</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/users'><FaUsers></FaUsers> All Users </NavLink></li>
                            
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My cart({cart.length})</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/review'><FaAd></FaAd> Review</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/booking'><FaMarkdown></FaMarkdown> Review</NavLink></li>
                            </>
                    }

                    {/* share ba common navlink */}
                    <div className='divider'></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>  Home</NavLink></li>
                    <li>
                        <NavLink to='/menu'> <MdRestaurantMenu />Menu</NavLink></li>
                    <li>
                        <NavLink to='/order/salad'> <MdShop />Shop</NavLink></li>
                    <li>
                        <NavLink to='/contact'> <MdContactPhone />Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;