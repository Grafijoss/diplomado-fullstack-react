import React, { useEffect } from 'react';

const NuevoClienteScreen = () => {

  const [formulario, setFormulario] = React.useState({});
  const [responseApi, setResponseApi] = React.useState(null);
  const [ isDisabled, setIsDisabled ] = React.useState(true);

  useEffect(() => {
    setDisabled()
  }, [formulario])


  const setDisabled = () => {
      if(formulario.nombres && formulario.apellidos && formulario.correo) {
        console.log('cumple con todo')
        return setIsDisabled(false)
      }
      return setIsDisabled(true)
  }

  const validateClient = (correo) => {
    const payload = {
      correo: correo
    }
    fetch("http://localhost:4000/api/v1/clientes/check", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      setResponseApi({
        message: data.message,
        type: 'success'
      })
    })
    .catch(error => {
      setResponseApi({
        message: error.message,
        type: 'danger'
      })
    })
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormulario({...formulario, [name]:value});
    console.log('blur')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("[FORMULARIO]", formulario)

    if(Object.keys(formulario).length > 0 && Object.keys(formulario).includes("correo")){
      
      if(formulario.correo !== ""){
        validateClient(formulario.correo)
      }
      console.log("se ha llenado el correo")
    }
  }


  return(
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
              <div className="col-lg-6">
                  <div className="mb-3">
                      <label>Nombres</label>
                      <input type="text" className="form-control" name="nombres" onBlur={(e)=>handleChange(e)} />
                  </div>                
              </div>
              <div className="col-lg-6">
              <div className="mb-3">
                  <label>Apellidos</label>
                  <input type="text"  className="form-control" name="apellidos" onBlur={(e)=>handleChange(e)} />
              </div>
              </div>
          </div>
          <div className='row'>
              <div className="col-lg-12">
              <div className="mb-3">
                  <label>Correo</label>
                  <input type="text" className="form-control" name="correo" onBlur={(e)=>handleChange(e)} />
              </div>
              </div>
          </div>
          {responseApi &&
              <div className={`alert text-center alert-${responseApi.type}`} >{responseApi.message}</div>
          }
          <button type="submit" className="btn btn-primary" disabled={isDisabled}>Crear cliente</button>
      </form>

  </>
  )
}

export default NuevoClienteScreen;