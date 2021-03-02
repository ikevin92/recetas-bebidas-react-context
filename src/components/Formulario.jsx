import { useContext, useState } from 'react';
// import Context
import { CategoriaContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    // state de busqueda
    const [ busqueda, guardarBusqueda ] = useState( {
        nombre: '',
        categoria: ''
    } );

    // llamamos los values del context
    const { categorias } = useContext( CategoriaContext );
    const { buscarRecetas, guardarConsultar } = useContext( RecetasContext );

    // console.log( categorias );

    // funcion para leer los contenidos
    const obtenerDatosReseta = ( { target } ) => {
        guardarBusqueda( {
            ...busqueda,
            [ target.name ]: target.value
        } );
    };

    // funcion submit
    const handleSubmit = ( e ) => {
       
        e.preventDefault();

        console.log( 'submit' );
        console.log( busqueda );

        buscarRecetas( busqueda );
        guardarConsultar( true );
    };


    return (
        <form
            className="col-12"
            onSubmit={ handleSubmit }
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={ obtenerDatosReseta }
                    />
                </div>

                <div className="col-md-4">
                    <select
                        name="categoria"
                        id="categoria"
                        className="form-control"
                        onChange={ obtenerDatosReseta }
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {
                            categorias.map( categoria => (
                                <option value={ categoria.strCategory } key={ categoria.strCategory }>{ categoria.strCategory }</option>
                            ) )
                        }
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
