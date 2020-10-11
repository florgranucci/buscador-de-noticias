import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    //opciones del select
    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'},
    ]

    //ustilizo custom hooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    

    //submit al form,pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return(
  <div className={`${styles.buscador} row`}> {/* Combinacion de una variable (styles) y un string (row) */}
      <div className='col s12 m8 offset-m2'>
      <form 
      
      onSubmit = {buscarNoticias}
      
      >
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className='input-field col s12'>
              <input 
                  type='submit'
                  className={`btn-large amber darken-2 ${styles.['btn-block']}`} 
                  value='Buscar'
              /> {/* El guion medio no es sintaxis valida para acceder a una variable en js por eso se debe encerrar el nombre de la variable en corchetes y comillas*/}
          </div>
      </form>
      </div>
  </div>
    );
}

export default Formulario;