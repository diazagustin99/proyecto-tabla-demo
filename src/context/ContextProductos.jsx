
import React, { createContext, useState, useEffect } from 'react';
import jsonData from '../data/data.json';
const ProductosContext = createContext();

const ProductosContextProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);

  const updateData = newData => {
    setMyData(newData);
  };

  useEffect(() => {
        setMyData(jsonData);
  }, []);

  return (
    <ProductosContext.Provider value={{ myData, updateData }}>
      {children}
    </ProductosContext.Provider>
  );
};

export { ProductosContext, ProductosContextProvider };
