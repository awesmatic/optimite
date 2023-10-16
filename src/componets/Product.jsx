import React from 'react'
import { Link } from "react-router-dom";

const Product = (props) => {
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <Link to={`/product/${props.product.id}`}><img src={props.product.image} className="w-full h-48 object-contain" /></Link>
            <div className='flex justify-between'>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.product.title}</div>
                    <p className="text-gray-700">${props.product.price}</p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">Delete</button>
                </div>
            </div>
        </div>


    );
};

export default Product;