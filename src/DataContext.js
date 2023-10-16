import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, setData }}>
            {children}
        </DataContext.Provider>
    );
};
