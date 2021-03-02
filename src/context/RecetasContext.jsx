import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// creamos el context
export const RecetasContext = createContext();

const RecetasProvider = ( props ) => {

    // States
    const [ recetas, guardarRecetas ] = useState( [] );
    const [ busqueda, buscarRecetas ] = useState( {
        nombre: '',
        categoria: ''
    } );
    const [ consultar, guardarConsultar ] = useState( false );


    // desestruturamos la busqueda
    const { nombre, categoria } = busqueda;


    useEffect( () => {

        if ( consultar ) {

            // funcion para obtener recetas
            const obtenerRecetas = async () => {

                try {

                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ nombre }&c=${ categoria }`;

                    console.log( url );
                    const resultado = await axios.get( url );

                    // console.log( resultado.data.drinks );
                    guardarRecetas( resultado.data.drinks );


                } catch ( error ) {
                    console.log( error );
                }

            };

            // llamamos la funcion
            obtenerRecetas();
        }

    }, [ busqueda ] );





    return (
        <RecetasContext.Provider
            value={ {
                recetas,
                buscarRecetas,
                guardarConsultar
            } }
        >
            {props.children }
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;
