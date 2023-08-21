import './videoView.css';
import { useEffect, useRef } from 'react';
import { ReactComponent as XMark } from '../../img/xmark.svg';


const VideoView = ({ imagesVisible, handleVideoClose, activeVideo, videoVisible }) => {
    const urls = {
        'pigeon': 'https://player.vimeo.com/video/851271429?h=bcb0ee5552',
        'pizza': 'https://player.vimeo.com/video/851279767?h=6e40d55f89',
        'shampoo': 'https://player.vimeo.com/video/851304276?h=5acd331cc4',
        'phone': 'https://player.vimeo.com/video/851254778?h=bb680bc7fb',
        'nectarine': 'https://player.vimeo.com/video/851247696?h=63689ebec5',
        'giveup': 'https://player.vimeo.com/video/851238051?h=65db242736',
        'freetime': 'https://player.vimeo.com/video/851227015?h=a75ee1966e',
        'buddha': 'https://player.vimeo.com/video/851226906?h=39dc35f80a',
        'blueman': 'https://player.vimeo.com/video/851209818?h=efa4038ec8',
        'party': 'https://player.vimeo.com/video/549004118',
        'pause': ''
    }


    const containerRef = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.visibility = 'visible';
        }, 1000)
        
    }, [])


    
    return ( 
        <div 
            ref={containerRef}
            className={videoVisible ? 'video-container video-visible' : 'video-container video-invisible'}
            style={{
                transitionDelay: videoVisible ? '1s' : '1s',
                zIndex: videoVisible ? '1' : '-1'
            }}
        >
            <XMark 
                onClick={handleVideoClose}
                className="close-button-video"

            />
  
            <iframe 
                ref={iframeRef}
                title={urls[activeVideo]}
                src={urls[activeVideo]} 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
     );
}
 
export default VideoView;