import './imageButton.css';

const ImageButton = ({source, id, handleImageClick}) => {
    
    return ( 
        <div 
            id={id}
            onClick={handleImageClick}
            className="image-container"
        >
            <img src={source}/>
        </div>
     );
}
 
export default ImageButton;