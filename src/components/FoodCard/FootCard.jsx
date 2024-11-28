import React from 'react';

const FootCarD = ({item}) => {
    const{name, image,price,recipe} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute bg-slate-700 px-3 rounded-sm text-white right-0 mr-5 mt-5 '>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn w-full bg-slate-100 btn-outline border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootCarD;