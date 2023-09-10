import React, { useEffect, useState } from 'react';

const ClientesScreen = () => {

  const [ clients, setClients ] = useState([])


  useEffect(() => {
    getAllClients()
  }, [])


  const getAllClients = () => {
    fetch('http://localhost:4000/api/v1/clientes')
    .then(response => response.json())
    .then(data => {

      setClients(data)

    })
    .catch(error => {
      console.log({
        error
      })
    })
  }

  return(
    <>
      <div className='grid-container'>
        {clients.map((client) => (
          <div className='grid-item'>
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{client.nombres}</li>
                <li className="list-group-item">{client.apellidos}</li>
                <li className="list-group-item">{client.correo}</li>
              </ul>
          </div>
          </div>
        ))}
      </div>

      
    </>
  )
}

export default ClientesScreen;