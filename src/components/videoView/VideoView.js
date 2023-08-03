import './videoView.css';
import { useEffect, useRef } from 'react';

const VideoView = ({ imagesVisible, handleVideoClose }) => {

    const containerRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.visibility = 'visible';
        }, 1000)
        
    }, [])
    return ( 
        <div 
            ref={containerRef}
            className={imagesVisible ? 'video-container video-invisible' : 'video-container video-visible'}
            styles={{transitionDelay: imagesVisible ? '1s' : '1s'}}
        >
            <button
                onClick={handleVideoClose}
            
            >X</button>
            <iframe 
                src="https://player.vimeo.com/video/540715699?h=95a77dade9" 
              
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
     );
}
 
export default VideoView;