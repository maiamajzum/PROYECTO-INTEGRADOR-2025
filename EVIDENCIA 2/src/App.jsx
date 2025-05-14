import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
//Importamos componentes propios
import Stats from "./components/Stats";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=50").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    //Filtramos los productos obtenidos de la API
    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

    //Cantidad de productos en pantalla
    const totalProducts = filteredProducts.length;

  // El producto más caro
const maxProduct =
  filteredProducts.length > 0
    ? filteredProducts.reduce((max, product) => (product.price > max.price ? product : max), filteredProducts[0])
    : null;

// El producto más barato
const minProduct =
  filteredProducts.length > 0
    ? filteredProducts.reduce((min, product) => (product.price < min.price ? product : min), filteredProducts[0])
    : null;
// Cantidad de productos cuyo título contiene más de 20 caracteres
    const longTitleCount = filteredProducts.filter((p) => p.title.length > 20).length;

    // Precio total de los productos filtrados
    const totalPrice = filteredProducts.reduce((total, product) => total + product.price, 0);

    // Promedio de descuento de los productos filtrados
    const averageDiscount = filteredProducts.length > 0
        ? filteredProducts.reduce((total, product) => total + product.discountPercentage, 0) / filteredProducts.length
        : 0;

    return (
        <>
            <h1 className="text-3xl text-blue-600 font-bold">Lista de productos:</h1>

            <input
                type="text"
                placeholder="Buscar producto"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>
                        {p.title} {p.price}
                    </li>
                ))}
            </ul>

            <button onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>

            {/* Renderización condicional */}
            {show && filteredProducts.length > 0 && (
                <Stats
                    total={totalProducts}
                    max={maxProduct}
                    min={minProduct}
                    longTitleCount={longTitleCount}
                    totalPrice={totalPrice}
                    averageDiscount={averageDiscount}
                />
            )}
            {filteredProducts.length == 0 && <div>No se encontraron productos</div>}
        </>
    );
}

export default App;
