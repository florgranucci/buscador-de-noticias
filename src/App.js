import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // definir categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  //para que el componente se vuela a ejecutar cuando cambia la categoria
  //llamado a la API
  useEffect(() => {
      const consultarAPI = async () => {
        const url = `
        http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=62af04b930fd4347a71e53d1c76bfc87`
      
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        
        guardarNoticias(noticias.articles);
      }
      consultarAPI();
  }, [categoria]);
  
  
  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
        
      </div>
    </Fragment>
  );
}

export default App;
