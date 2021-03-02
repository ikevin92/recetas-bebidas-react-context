import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// crear el context
export const CategoriaContext = createContext();


// provider es donde se encuentrarn las funciones y state
const CategoriasProvider = ( props ) => { // siempre se le pasan las props

    // crear el state del context
    const [ categorias, guardarCategorias ] = useState( [] );

    // ejecutar llamado a la api
    useEffect( () => {

        // funcion para obtener categorias
        const obtenerCategorias = async () => {
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const categorias = await axios.get( url );
                // console.log( categorias.data.drinks );
                guardarCategorias( categorias.data.drinks );

            } catch ( error ) {
                console.log( error );
            }
        };

        // llamamos la funcion
        obtenerCategorias();
    }, [] );


    return (
        <CategoriaContext.Provider
            value={ {
                categorias // pasamos las categorias

            } }
        >
            { props.children }
        </CategoriaContext.Provider>
    );
};

export default CategoriasProvider;