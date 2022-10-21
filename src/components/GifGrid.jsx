//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log(isLoading);
    /* const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    //useEffect: para disparar efectos secundarios
    useEffect( () => {
        getImages();
    }, []);//si lo dejo vacios [] sólo se ejecuta una vez */


    return (
        <>
            <h3>{ category }</h3>
            {
                /* isLoading //Preguntar si el isLoading is true
                ? ( <h2>Cargando...</h2> )
                : null */
                isLoading && ( <h2>Cargando</h2> )//si isLoading = true va a ejecutar lo que está después del &&
            }

            <div className='card-grid'>

                { images.map( (image) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                        //key={ image.id }
                        //title={ image.title }
                        //url={ image.url }
                    />
                )) }
            </div>

        </>
    )
}
