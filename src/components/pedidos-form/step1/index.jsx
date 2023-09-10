import React from 'react';

const PedidosFormStep1 = (props) => {

    const {clienteSeleccionado, setClienteSeleccionado} = props;

    return(
        <div className="row">
            <div className="col">
                <label>Seleccionar Cliente</label>
                <select className='form-control' value={clienteSeleccionado} onChange={(e)=>setClienteSeleccionado(e.target.value)}>
                    <option>Seleccionar</option>
                    <option value="daniel">Daniel</option>
                    <option value="pedro">Pedro</option>
                    <option value="pablo">Pablo</option>
                    <option value="alejandro">Alejandro</option>
                </select>
            </div>
        </div>        
    )
}

export default PedidosFormStep1;