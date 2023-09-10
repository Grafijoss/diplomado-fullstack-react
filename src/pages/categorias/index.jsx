import React, {useState, useEffect} from 'react';

const CategoriasScreen = () => {
    
    //useStates -> manejo de estados locales a nivel de componente.
    const [contador,setContador] = useState(0)
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [productos,setProductos] = useState([])
    const [categorias,setCategorias] = useState({})
    const [persona,setPersona] = useState("")
    const [isLogged,setIsLogged] = useState(false)

   
    
    React.useEffect(()=>{},[])

    //useEffect -> reemplaza el ciclo de vida de los componentes basados en clases
    React.useEffect(()=>{console.log("Me ejecuto cada que tengo un cambio")}) // -> sin argumentos, se va a disparar cada que cualquiera de los hooks sufra un cambio

    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el DOM")
    },[]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias vacías se va a ejecutar una única vez y es cuando se monta el DOM
    
    React.useEffect(()=>{
        console.log("Me ejecuto una sola vez cuando se monta el DOM y cada que mis dependencias [CONTADOR] sufren un cambio")
        if(nombre !== "" && apellido !== ""){
            saludar();
        }
    },[contador,nombre,apellido]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio

    const saludar = () => {
        alert("Bienvenido "+nombre+ " "+apellido);
    }

    React.useEffect(()=>{        
        return () => {
            console.log("Me ejecuto cuando el componente se destruye o sufre un cambio.")
        }
    },[]) // -> como segundo argumento, recibe las deps o dependencias, cuando tiene dependencias se va a ejecutar una única vez y es cuando se monta el DOM y cada que esa dependencia sufra un cambio
    

    
    //Hooks -> para componentes funcionales
    //State -> para componentes basados en clases.

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const handleChangeName = (e) => {
        const {value, name} = e.target;
        setNombre(value);
        setContador(contador + 1);
    }

    const handleChangeApellido = (e) => {
        const {value, name} = e.target;
        setApellido(value);
    }

    return(
        <>
        Contador: {contador} <br/>
        Valor de Nombre: {nombre} <br/>
        Valor de Apellido: {apellido} <br/>

        <label>Nombres</label>
        <input type="text" onBlur={(e)=>handleChangeName(e)} />

        <label>Apellidos</label>
        <input type="text" onBlur={(e)=>handleChangeApellido(e)} />
        <br/>
        <button type="button" onClick={()=>incrementarContador()}>Incrementar</button>
        </>
    )
}

export default CategoriasScreen;
