import { useState, useEffect } from "react";

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toUpperCase();
      const sound = soundGroup.find(s => s.key === pressedKey);
      if (sound) {
        playSound(pressedKey, sound.id);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const soundGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  function playSound(key, id) {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
      setActiveKey(id); // Set the displayed id
    }
  }

  return (
    <main className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-primary">
      <div id="drum-machine">
        <div id="display" className="text-center ">
          <h2 className="bg-primary-subtle rounded py-2">{activeKey}</h2>
        </div>
        <div className="row bg-primary-subtle rounded p-4">
          {
            soundGroup.map((sound) => (
              <div className="col-4 text-center" id={sound.id} key={sound.key}>
                <button 
                  className="btn btn-primary m-1" 
                  onClick={() => playSound(sound.key, sound.id)} // Pass id to playSound
                >
                  {sound.key}
                </button>
                <audio id={sound.key} src={sound.url}></audio>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default App;
