import React from 'react';

const FooterComponent = () => {

    return(
        <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            Todos los derechos reservados &copy; {new Date().toLocaleDateString('es-Es')}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default FooterComponent;