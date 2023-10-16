import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSaveData = () => {
        if (formData.image && formData.title && formData.description && formData.price) {
            onSave(formData);
        }
        setFormData({
            image: '',
            title: '',
            description: '',
            price: '',
        })
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <div className="modal-container bg-white w-10/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    {/* ... (other modal content) */}
                    <div className='flex mb-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-24" htmlFor="imageLink">
                            Image
                        </label>
                        <input
                            className="w-full p-2 rounded-md border border-gray-300"
                            type="text"
                            id="image"
                            name="image"
                            value={formData.imageLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex mb-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-24" htmlFor="imageLink">
                            Heading
                        </label>
                        <input
                            className="w-full p-2 rounded-md border border-gray-300"
                            type="text"
                            id="heading"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex mb-2'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-24" htmlFor="imageLink">
                            Description
                        </label>
                        <input
                            className="w-full p-2 rounded-md border border-gray-300"
                            type="text"
                            id="description"
                            name="description"
                            value={formData.imageLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex mb-2' >
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-24 " htmlFor="imageLink">
                            Price
                        </label>
                        <input
                            className="w-full p-2 rounded-md border border-gray-300"
                            type="text"
                            id="price"
                            name="price"
                            value={formData.imageLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* ... (other input fields similarly) */}
                    <div className="mt-4 flex justify-between">
                        <button onClick={handleSaveData} className="px-4  py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                            Save
                        </button>
                        <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
