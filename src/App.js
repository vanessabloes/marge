import React, { useState } from 'react';
import './App.css';
import useSound from 'use-sound';
//import boopSfx from '../../sounds/boop.mp3';

function App() {

  const soundUrl = '/sounds/niels.mp3';

  const [playbackRate, setPlaybackRate] = React.useState(1);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate);
    play();
  };

  const [number, setNumber] = useState('');

  return (
    <>
      <div className="App">
        <header className="App-header">

          <form >
            <label className="App-Form">
              <p>Geef het juiste nummer in voor een happy ending:</p>
              <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            </label>
          </form>
          {number === "050880194" ?
            <div>
              <p>Duw op het hartje!</p>
              <button className="App-heart" onClick={handleClick}>
                <span role="img" aria-label="Heart">
                  💖
      </span>
              </button>
            </div>
            :
            <p></p>
          }

          {number.length === 9 && number !== "050880194" ?
            <p>Probeer opnieuw!</p>
            :
            <p></p>
          }


        </header>

      </div>

    </>
  );
}

export default App;
