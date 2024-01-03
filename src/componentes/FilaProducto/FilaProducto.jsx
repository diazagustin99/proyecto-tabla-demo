import React from 'react';

function FilaProducto({ producto }) {
  const { nro_rep, des_rep, stock_suc, stock_total } = producto;

  return (
    <tr>
      <td>{nro_rep}</td>
      <td>{des_rep}</td>
      <td>{stock_suc}</td>
      <td>{stock_total}</td>
    </tr>
  );
}

export default FilaProducto;