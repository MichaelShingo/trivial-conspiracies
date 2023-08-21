import interviewsArray from "./interviewsArray";
import { useEffect, useRef, useState } from 'react';
import './interview.css';

const InterviewText = () => {
  const [text, setText] = useState(interviewsArray[0]);
  const [activeButton, setActiveButton] = useState('0');
  const textRef = useRef(null);

  const interviewNumbers = {0: '2', 1: '4', 2: '5',
    3: '12', 4: '13', 5: '24', 6: '25', 7: '26'}

  const handleClick = (index) => {
    textRef.current.style.animation = 'interview-transition 2s ease-in-out 1 forwards';
    setActiveButton(index);
    setTimeout(() => {
      setText(interviewsArray[index]);
    }, 1000);

    setTimeout(() => {
      textRef.current.style.animation = 'none'
    }, 2000);
    
  }

  return ( 
    <>
    <div id="interview-buttons">
      <div id="interview-selectors">
        {Object.keys(interviewNumbers).map(i => {
          if (i !== '5') {
            return (
              <button 
                style={{
                  transform: activeButton === i ? 'scale(140%)' : 'scale(100%)',
                  color: activeButton === i ? 'var(--color-gold-hover)' : 'var(--color-gold)'
              }}
                id={i}
                key={i}
                onClick={() => handleClick(i)}>{interviewNumbers[parseInt(i)]}
              </button>
          )
          }
          })}
      </div>
    </div>
    <div ref={textRef} className="interview-container">
      {text}
    </div>
  </>
   );
}
 
export default InterviewText;

