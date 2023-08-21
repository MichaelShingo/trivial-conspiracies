import './scrollablePage.css';
import { ReactComponent as XMark } from '../../img/xmark.svg';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as UpArrow } from '../../img/up-arrow.svg';

const ScrollablePage = ({ pageVisible, setPageVisible, setImagesVisible, children }) => {
    const pageRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        pageRef.current.addEventListener('scroll', (e) => {
            if (pageRef.current.scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }  
        })
    }, []);

    const handleClose = () => {
        setPageVisible(false);
        setImagesVisible(true);
    }

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false);
        } else {
            if (pageVisible) {
                pageRef.current.style.zIndex = '1';
                setTimeout(() => {
                    pageRef.current.style.animation = 'fade-in-video 1s ease-in-out 2s 1 forwards';
    
                }, 750)
    
            } else {
                pageRef.current.style.zIndex = '0';
                setTimeout(() => {
                    pageRef.current.style.animation = 'fade-out-video 1s ease-in-out 0s 1 forwards';
                }, 0)
            }
        }
        
    }, [pageVisible])

    return ( 
        <div 
            ref={pageRef}
            className={pageVisible ? 'page-container page-visible' : 'page-container page-invisible'}
        >
            <XMark 
                className="close-button"
                onClick={handleClose}
            />
            <UpArrow 
                className="back-to-top"
                style={{opacity: scrolled ? '1' : '0'}}
                onClick={() => {
                    setScrolled(false);
                    pageRef.current.scrollTo({top: 0, behavior: 'smooth'})
                }}
            />
            {children}
        </div>
     );
}
 
export default ScrollablePage;