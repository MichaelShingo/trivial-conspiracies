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
      <div id="question-container">
            <img src={question}/>
          </div>
      <ScrollablePage
        pageVisible={creditsVisible}
        setPageVisible={setCreditsVisible}
        setImagesVisible={setImagesVisible}
      >
        <p>It was summertime in the year 2020. We had all been living isolated, in the
                deep, dead heat of the covid-19 pandemic. I was beginning to lose faith in the
                prospects of filmmaking amidst this new covid-world. Then one day my friend
                Shae Belenski sent me a draft of his writing in a document titled: “drunk.” It was
                essentially a series of monologues, which Shae had written as “interviews” (read
                these by clicking on the “Trivial Conspiracies” button.) He was interested in
                filming some of these monologues and I jumped at the opportunity to adapt
                his writing into a film...
            </p>
            <p>For me, making this film was a creative escape from the scary reality of our
                world, but also a way of processing this reality. Conspiracy theories revolving
                around the pandemic and the 2020 presidential election were part of the
                zeitgeist of these years and this project brought some healing levity to all that
                harmful nonsense.
            </p>

            <p>I write this exactly 2 years after Philadelphia locked down. I am stuck at home,
                sick with Covid-19. During my quarantine, I can’t help but reflect on the past
                two years and feel lucky to be alive, vaccinated, and grateful for the privilege to
                be creative with people amidst all the chaos.
            </p>
            <p>- Sam</p>
            <ul>
                <li>Cast (in order of appearance):</li>
                <li>Brooke Shilling</li>
                <li>Sam Dellert</li>
                <li>Nina Sharp</li>
                <li>Nazlah Black</li>
                <li>Rohaan Unvala</li>
                <li>Renee Comings</li>
                <li>Ryan Pater</li>
                <li>Xan Pemsler</li>
                <li>Sasha Kostyrko</li>
                <li>Anna Phillips</li>
            </ul>
            <ul>
                <li>Director, Cinematographer, Editor</li>
                <li>Sam Dellert</li>
            </ul>
            <ul>
                <li>Writer</li>
                <li>Shae Belenski</li>
            </ul>
            <ul>
                <li>Colorist</li>
                <li>Jake White</li>
            </ul>
            <ul>
                <li>Sound Editor</li>
                <li>Steve Campagna</li>
            </ul>
            <ul>
                <li>Music from</li>
                <li>Barraco Barner</li>
                <li>Jeff Silverman</li>
            </ul>
            <ul>
                <li>Location Sound Mixer</li>
                <li>Matt Ober</li>
            </ul>
            <ul>
                <li>Boom Operator</li>
                <li>Xan Pemsler</li>
            </ul>
            <ul>
                <li>Production Support/Set Photographer</li>
                <li>Renee Comings</li>
            </ul>
            <ul>
                <li>Web Developer</li>
                <li>Michael Shingo Crawford</li>
            </ul>
            <ul>
                <li>Poster Design by</li>
                <li>Tawan Maneetapho</li>
            </ul>
            <ul>
                <li>Thank you</li>
                <li>Martha (Kensington)</li>
                <li>Liberty Choice</li>
                <li>Pro 8mm</li>
                <li>Dana Mandi</li>
            </ul>
            <ul>
                <li>Thank you</li>
                <li>Dellert Family</li>
                <li>Julianna Casella</li>
                <li>Cassidy Minarik</li>
                <li>Peter Charney</li>
                <li>Amitanshu Das</li>
                <li>Megan Wetham</li>
                <li>Trey Shields</li>
            </ul>
            <ul>
                <li>Proudly filmed in Philadelphia, PA</li>
                <li>© 2023</li>
            </ul>
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
          id="title-container" 
          className={imagesVisible ? 'flex-row animate-in' : 'flex-row animate-out'}
        >
          
          {/* <ImageButton 
            id="question"
            source={question}
            handleImageClick={handleQuestionClick}
            className="question-mark"
        /> */}
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
