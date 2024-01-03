import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductosContextProvider } from './context/ContextProductos';
import TablaProductos from './componentes/TablaProductos/TablaProductos';
function App() {
  const [productos, setProductos] = useState([]);



  return (
    <>
    <h1>EJERCICIO TABLA COMPAGINADA</h1>
    <ProductosContextProvider>
      <TablaProductos/>
    </ProductosContextProvider>
    <p> by <a href="mailto:agustinxpa@gmail.com">agustinxpa@gmail.com</a></p>
    </>
  )
}

export default App
