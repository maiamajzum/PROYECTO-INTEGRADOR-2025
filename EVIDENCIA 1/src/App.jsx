import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("https://dummyjson.com/products?").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

   return (
        <>
            <h1 className="text-3xl text-blue-600 font-bold">Lista de productos:</h1>
            
            {/* Contenedor de productos en una grilla */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border-2 border-gray-300 bg-white p-4 m-2 rounded-lg shadow-md">
                        <h2 className="font-bold text-lg">{p.title}</h2>
                        <p className="text-gray-600">${p.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
