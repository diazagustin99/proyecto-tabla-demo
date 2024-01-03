import React, { useContext, useEffect, useState } from "react";
import { ProductosContext } from "../../context/ContextProductos";
import FilaProducto from "../FilaProducto/FilaProducto";
import './TablaProductos.css';

function TablaProductos(params) {
  const { myData, updateData } = useContext(ProductosContext);
  const [productosRender, setProductosRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    // Actualizar el estado de productosRender cuando myData cambie
    setProductosRender(myData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
  }, [myData, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Asegura que la página no sea menor que 1
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>codigo unico</th>
            <th>nombre del producto</th>
            <th>stock en mi sucursal</th>
            <th>stock total</th>
          </tr>
        </thead>
        <tbody>
          {productosRender.length > 0 ? (
            productosRender.map((producto) => (
              <FilaProducto key={producto.nro_rep} producto={producto} />
            ))
          ) : (
            <tr>
              <td colSpan="4">NO HAY MAS FILAS QUE MOSTRAR</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </>
  );
}

export default TablaProductos;
