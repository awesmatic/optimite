import React, { useState } from 'react'
import Modal from './DetailModal'
import { useDataContext } from '../DataContext';

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const { data, setData } = useDataContext();
    const onClose = () => {
        setShowModal(false)

    }
    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000000);
    }
    const onSave = (product) => {
        const newProduct = { id: generateRandomId(), ...product };
        const newData = [...data, newProduct];
        setData(newData);
    }
    const handleSortChange = (value) => {
        if (value === 'lowToHigh') {
            const sortedData = [...data].sort((a, b) => a.price - b.price);
            setData(sortedData);
        } else if (value === 'highToLow') {
            const sortedData = [...data].sort((a, b) => b.price - a.price);
            setData(sortedData);
        }
    };
    return (
        <div className='flex justify-between bg-red-400 p-4'>
            <h1>Optimite</h1>
            <div >

                <select
                    className="border border-gray-300 rounded bg-blue-500 hover:bg-blue-600 mx-1 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => handleSortChange(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                <button onClick={() => setShowModal(true)} className='bg-blue-500 hover:bg-blue-600 mx-1 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300'>Add Product</button>
            </div>
            {showModal && <Modal isOpen={showModal} onClose={onClose} onSave={onSave} />}
        </div>
    )
}

export default Header