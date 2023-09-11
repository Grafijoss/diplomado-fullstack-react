import React, { useEffect } from 'react';

const NuevoClienteScreen = () => {

  const [ formulario, setFormulario ] = React.useState({});
  const [ responseApi, setResponseApi ] = React.useState(null);
  const [ isDisabled, setIsDisabled ] = React.useState(true);

  useEffect(() => {
    setDisabled()
  }, [formulario])

  const setDisabled = () => {
      if(formulario.nombres && formulario.apellidos && formulario.correo && formulario.documento) {
        return setIsDisabled(false)
      }
      return setIsDisabled(true)
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormulario({...formulario, [name]:value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const {
        nombres,
        apellidos,
        correo,
        documento
      } = formulario

      const payload = {
        tipoDocumento: 'CC',
        noDocumento: documento,
        nombres,
        apellidos,
        correo,
      };
      
      // CREA EL CLIENTE
      const responseCreate = await fetch("http://localhost:4000/api/v1/clientes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!responseCreate.ok) {
        // Manejar errores de respuesta no exitosa aquí
        const responseCreateError = await responseCreate.json();
        throw new Error(responseCreateError.message);
      }
  
      const data = await responseCreate.json();
      
      setResponseApi({
        message: data.message,
        type: 'success'
      });
    } catch (error) {

      setResponseApi({
        message: error.message,
        type: 'danger'
      });
    }

  }

  return(
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
              <div className="col-lg-6">
                  <div className="mb-3">
                      <label>Nombres</label>
                      <input type="text" className="form-control" name="nombres" onChange={(e)=>handleChange(e)} />
                  </div>                
              </div>
              <div className="col-lg-6">
              <div className="mb-3">
                  <label>Apellidos</label>
                  <input type="text"  className="form-control" name="apellidos" onChange={(e)=>handleChange(e)} />
              </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <div className="mb-3">
                    <label>Número de documento</label>
                    <input type="text" className="form-control" name="documento" onChange={(e)=>handleChange(e)} />
                  </div>                
              </div>
              <div className="col-lg-6">
                  <div className="mb-3">
                    <label>Correo</label>
                    <input type="text" className="form-control" name="correo" onChange={(e)=>handleChange(e)} />
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