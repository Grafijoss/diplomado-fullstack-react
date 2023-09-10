import React from 'react';

const PedidosFormStep2 = (props) => {

    const {productosSeleccionados, setProductosSeleccionados} = props;

    const productos = [
        {
            id: 1,
            nombre: "Zapatilla Hombre",
            imagen: "https://via.placeholder.com/200",
            categoria: "Hombre",
            precio: 50
        },
        {
            id: 2,
            nombre: "Zapatilla Mujer",
            imagen: "https://via.placeholder.com/200",
            categoria: "Mujer",
            precio: 85
        },
        {
            id: 3,
            nombre: "Zapatilla Deportiva hombre",
            imagen: "https://via.placeholder.com/200",
            categoria: "Hombre",
            precio: 45
        }
    ]

    const handleAddProducts = (productData) => {
        setProductosSeleccionados([...productosSeleccionados, productData])
        alert("Producto agregado exitosamente");
    }

    return(
        <div className="row">
            <div className="col">
                <div className='row'>
                    {productos && productos.length > 0 && productos.map((data, index)=>{
                        return(
                            <div className="col-lg-3" key={index}>
                                <div className="card" >
                                    <div className="card-body">
                                        <div className="card-title">{data.nombre}</div>
                                        <img src={data.imagen} alt="..." className="img-fluid" />
                                        <p><b>Precio:</b>{data.precio}</p>
                                        <button type="button" onClick={()=>handleAddProducts(data)} className="btn btn-info">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>        
    )
}

export default PedidosFormStep2;