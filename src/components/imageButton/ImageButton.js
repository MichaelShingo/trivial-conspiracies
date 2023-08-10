import './imageButton.css';

const ImageButton = ({source, id, handleImageClick, children }) => {
    
    return ( 
        <div 
            id={id}
            onClick={() => handleImageClick(id)}
            className="image-container"
        >
            <img src={source}/>
            {children}
        </div>
     );
}
 
export default ImageButton;