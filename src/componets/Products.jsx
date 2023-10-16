import React from 'react'
import Product from './Product'
import { useDataContext } from '../DataContext';

const Products = () => {
    const { data, loading } = useDataContext();
    if (loading) {
        return <p>Loading...</p>;
    }




    return (
        <div className='p-4' >
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                {data.map((product, index) => (
                    <Product
                        key={index}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products