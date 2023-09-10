import React from 'react';

class CategoriaClaseScreen extends React.Component{
    //Montaje
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
    }

    //componentDidMount -> se montó el DOM
    componentDidMount(){
        console.log("el componente se montó")
    }
    //componentDidUpdate -> se dispara cuando detecta un cambio en el componente o en un state
    componentDidUpdate(){
        console.log("el componente se actualizó")
    }
    //componentWillUnmount -> se dispara cuando el componente se desmonta
    componentWillUnmount(){
        console.log("el componente se desmontó")
    }
    //componentDidCatch -> se dispara cuando queremos detectar un error.
    componentDidCatch(){
        console.log("se detectaron errores")
    }
    
    
    incrementarContador(e){
        this.setState({
            contador: this.state.contador +1
        })
    }
//Renderizado
    render(){
        return (
            <>
            ...Contenido...
            <button type="button" onClick={this.incrementarContador}>Incrementar</button>
            {this.state.contador}
            </>
        )
    }
}

export default CategoriaClaseScreen;