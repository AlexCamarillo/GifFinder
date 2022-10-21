import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => { //setCategories

    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = ( {target} ) => {//desesctructuramos target de event
        setInputValue(target.value);//para poder escribir en el input
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;//si tenemos un solo caractér no lo inserta

        //setCategories( categories => [ inputValue, ...categories ] );
        setInputValue('');//borra lo ya escrito en el input
        onNewCategory( inputValue.trim() );
    }   

    return (
            <form action="" onSubmit={ onSubmit }>{/* event => onSubmit(event) */}
                <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }//event => onInputChange(event)
                />
            </form>
  )
}
