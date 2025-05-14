import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    //Filtramos productos obtenidos de la API
    const filteredProducts = products.filter((p)=> p.title.toLowerCase().includes(search.toLocaleLowerCase()));
    
    const totalProducts = filteredProducts.length;

    const maxProducts = Math.max(...filteredProducts.map((p) => p.price));   
 
    const minProducts = Math.min(...filteredProducts.map((p) => p.price)); 

    return (
        <>
            <h1>Axios</h1>

            <h2>{search}</h2>

            <input 
                type="text" 
                placeholder="Buscar Producto" 
                value={search} 
                onChange={(e)=>
                    {setSearch(e.target.value)}}/>

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>{p.title} {p.price}</li>
                ))}
            </ul>   

            <div>
                <h2>Estadisticas</h2>
                <p>Productos totales: {totalProducts}</p>
                <p>Precio maximo: {maxProducts}</p>
                <p>Precio minimo: {minProducts}</p>
            </div>

            {/* Renderizacion condicional */} 
            { filteredProducts.length==0 && <div>No se encontraron productos</div>}

        </>
    );
}

export default App;
