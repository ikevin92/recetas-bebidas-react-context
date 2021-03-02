import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';

// importamos los provider de los context
import CategoriasProvider from './context/CategoriasContext';
import ModalProvider from './context/ModalContext';
import RecetasProvider from './context/RecetasContext';

function App () {
    return (

        <CategoriasProvider>
            <RecetasProvider>
                <ModalProvider>


                    {/* Componentes */ }

                    <Header />

                    {/* Formulario */ }
                    <div className="container mt-5">
                        <div className="row">

                            <Formulario />
                        </div>
                    </div>

                    <ListaRecetas />

                    {/* Fin Componentes */ }


                </ModalProvider>
            </RecetasProvider>
        </CategoriasProvider>

    );
}

export default App;
