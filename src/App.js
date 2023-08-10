import { useState } from 'react';
import ImageButton from './components/imageButton/ImageButton';
import VideoView from './components/videoView/VideoView';
import blueMan from './img/blueMan.png';
import buddah from './img/buddah.png';
import freeTime from './img/freeTime.png';
import giveUp from './img/giveUp.png';
import nectarine from './img/nectarine.png';
import partyBringBeer from './img/partyBringBeer.png';
import phone from './img/phone.png';
import pidgeon from './img/pidgeon.png';
import pizza from './img/pizza.png';
import shampoo from './img/shampoo.png';
import title from './img/title.png';
import bluemanNoEyes from './img/bluemanNoEyes.png';
import eyes from './img/eyes.png';
import question from './img/question.png';
import ScrollablePage from './components/ScrollablePage/ScrollablePage';
import InterviewText from './components/interviewText/InterviewText';
import creditsContent from './components/ScrollablePage/creditsContent';

function App() {
  const [imagesVisible, setImagesVisible] = useState(true);
  const [activeVideo, setActiveVideo] = useState('');
  const [creditsVisible, setCreditsVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [interviewVisible, setInterviewVisible] = useState(false);

  const handleImageClick = (label) => {
    setImagesVisible(false);
    setActiveVideo(label);
    setVideoVisible(true);
  }

  const handleVideoClose = () => {
    setImagesVisible(true);
    setVideoVisible(false);
    setTimeout(() => {
      setActiveVideo('pause');

    }, 1000)
  }

  const handleQuestionClick = (label) => {
    console.log('question clicked');
    setImagesVisible(false);
    setCreditsVisible(true);
  }

  return (
    <div className="App">
      {/* <div id="question-container">
            <img src={question}/>
        </div> */}
      <ScrollablePage
        pageVisible={creditsVisible}
        setPageVisible={setCreditsVisible}
        setImagesVisible={setImagesVisible}
      >
        {creditsContent}
      </ScrollablePage>
      <ScrollablePage
        pageVisible={interviewVisible}
        setPageVisible={setInterviewVisible}
        setImagesVisible={setImagesVisible}
      >
       <InterviewText />
      </ScrollablePage>
      
      {/* <div className="black-overlay"></div> */}
      <div id="page-background">
      
        <VideoView 
          imagesVisible={imagesVisible}
          handleVideoClose={handleVideoClose}
          activeVideo={activeVideo}
          videoVisible={videoVisible}
        />
        <div 
          id="row-1" 
          className={imagesVisible ? 'flex-row animate-in' : 'flex-row animate-out'}
        >
          
          
          <ImageButton 
            id="freetime"
            source={freeTime}
            handleImageClick={handleImageClick}
          />
          <img 
            id="title-image" 
            src={title}
            onClick={() => {
              setInterviewVisible(true); 
              setImagesVisible(false);
            }}
          />
          <ImageButton
            id="phone"
            source={phone}
            handleImageClick={handleImageClick}
          />
        </div>
        <div className={imagesVisible ? 'flex-row animate-in' : 'flex-row animate-out'} id="row-2">
            <ImageButton 
                id="question"
                source={question}
                handleImageClick={handleQuestionClick}
                className="question-mark"
            />
            <ImageButton
              id="pizza"
              source={pizza}
              handleImageClick={handleImageClick}
            />
            <ImageButton 
              id="party"
              source={partyBringBeer}
              handleImageClick={handleImageClick}
            />
            <ImageButton 
              id="pigeon"
              source={pidgeon}
              handleImageClick={handleImageClick}
            />
            <ImageButton 
              id="nectarine"
              source={nectarine}
              handleImageClick={handleImageClick}
            />
        </div>
        <div className={imagesVisible ? 'flex-row animate-in' : 'flex-row animate-out'} id="row-3">
            <ImageButton
              id="buddha"
              source={buddah}
              handleImageClick={handleImageClick}
            />
            <ImageButton 
              id="shampoo"
              source={shampoo}
              handleImageClick={handleImageClick}
            />
            <ImageButton 
              id="blueman"
              source={bluemanNoEyes}
              handleImageClick={handleImageClick}
            >
              <img className="eyes" id="eye1" src={eyes}/>
              <img className="eyes" id="eye2" src={eyes}/>
            </ImageButton>
            <ImageButton 
              id="giveup"
              source={giveUp}
              handleImageClick={handleImageClick}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
