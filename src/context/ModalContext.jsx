import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// creamos el context
export const ModalContext = createContext();

const ModalProvider = ( props ) => {

    // state del provider
    const [ idReceta, guardarIdReceta ] = useState( null );
    const [ informacion, guardarReceta ] = useState( {} );

    // una vez que teneos una receta llamar la api
    useEffect( () => {

        // funcion para llamar api
        const obtenerReceta = async () => {

            try {
                if ( !idReceta ) return;

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idReceta }`;

                const resultado = await axios.get( url );
                // console.log( resultado.data.drinks[0] );

                guardarReceta( resultado.data.drinks[ 0 ] );

            } catch ( error ) {
                console.log( error );
            }

        };

        obtenerReceta();

    }, [ idReceta ] );


    return (
        <ModalContext.Provider
            value={ {
                informacion,
                guardarIdReceta,
                guardarReceta
            } }
        >
            {props.children }
        </ModalContext.Provider>
    );
};

export default ModalProvider;
