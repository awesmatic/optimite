import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useDataContext } from '../DataContext';
const Item = () => {
    const { id } = useParams();
    const { data, loading } = useDataContext();
    const product = data?.find((item) => item.id === Number(id));
    console.log(product)

    return (
        <div className='p-4'>
            <div className='flex justify-between'>

                <h1 className='text-3xl font-bold text-indigo-700'>Optimite</h1>
                <Link to='/' > <button className='bg-blue-500 hover:bg-blue-600 mx-1 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300'>Back</button></Link>
            </div>
            <div className='flex flex-col py-2 sm:p-16 sm:flex-row '>
                <div className="w-full sm:w-1/2 ">
                    <img className="w-full h-48 object-contain" src={product?.image} alt='' />
                </div>

                <div className='m-2 w-full sm:w-1/2 '>
                    <h1 className='text-2xl m-2'>{product?.title}</h1>
                    <h2 className='text-xl m-2'>{product?.description}</h2>
                    <h2 className='text-xl m-2'>Price - ${product?.price}</h2>
                </div>
            </div>
        </div >
    )
}

export default Item