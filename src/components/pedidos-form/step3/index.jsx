import React from 'react';

const PedidosFormStep3 = (props) => {

    const { productosSeleccionados, clienteSeleccionado } = props;
    
    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>Resumen</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p><b>Cliente Seleccionado: </b> {clienteSeleccionado && clienteSeleccionado}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Productos Seleccionados</h3>
                    <div className="row">
                        <div className="col">
                            <div className='row'>
                                {productosSeleccionados && productosSeleccionados.length > 0 && productosSeleccionados.map((data, index) => {
                                    return (
                                        <div className="col-lg-3" key={index}>
                                            <div className="card" >
                                                <div className="card-body">
                                                    <div className="card-title">{data.nombre}</div>
                                                    <img src={data.imagen} alt="..." className="img-fluid" />
                                                    <p><b>Precio:</b>{data.precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PedidosFormStep3;