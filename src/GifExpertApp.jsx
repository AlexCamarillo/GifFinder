import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    //Hoock para mantener el estado
    const [ categories, setCategories ] = useState( ['One Punch'] );//Inicializamos como un arreglo

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) )return;//si la categoría ya existe no haga nada
        //categories.push('Shippuden');
        //PRIMERA FORMA
        setCategories( [ newCategory, ...categories ] );//hacemos una copia del arreglo 'categories' con el spread '...' y añadimos el nuevo elemento

        //SEGUNDA FORMA
        //setCategories( cat => [ ...cat, 'valorant' ] );
    }

  return (
    <>
        <h1>Gif Finder</h1>

        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ onAddCategory }//on es que está emitiendo algo
        
        />

        {/*  Listado de Gif */}

        {/*<button onClick={ onAddCategory }>Agregar</button>*/}

        { categories.map( category => 
            (
              <GifGrid 
                key={ category } 
                category={ category }/>
        ))
        //<li key={ category }>{ category }</li>
        }     {/*Map permite barrer cada uno de los elementos del arreglo*/ }
        

    </>
  )
}
