function Stats(props) {
    return (
        <div>
            <h2>Estadísticas</h2>
            <p>Productos totales: {props.total}</p>
            <p>Producto más caro: {props.max.title} - ${props.max.price}</p>
            <p>Producto más barato: {props.min.title} - ${props.min.price}</p>
            <p>Cantidad de productos con título largo (más de 20 caracteres): {props.longTitleCount}</p>
            <p>Precio total de productos: ${props.totalPrice.toFixed(2)}</p>
            <p>Promedio de descuento: {props.averageDiscount.toFixed(2)}%</p>
        </div>
    );
}

export default Stats;
