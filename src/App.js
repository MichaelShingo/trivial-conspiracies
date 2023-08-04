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

function App() {
  const [imagesVisible, setImagesVisible] = useState(true);

  const handleImageClick = () => {
    setImagesVisible(false);
  }

  const handleVideoClose = () => {
    setImagesVisible(true);
  }

  return (
    <div className="App">
      <div className="black-overlay"></div>
      <div id="page-background">
        <VideoView 
          imagesVisible={imagesVisible}
          handleVideoClose={handleVideoClose}
        />
        <div id="title-container" className={imagesVisible ? 'flex-row animate-in' : 'flex-row animate-out'}>
          {/* <ImageButton 
            id="freeTime"
            source={freeTime}
            handleImageClick={handleImageClick}
          /> */}
          <img id="title-image" src={title}/>
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
              id="pidgeon"
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
              source={blueMan}
              handleImageClick={handleImageClick}
            />
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
