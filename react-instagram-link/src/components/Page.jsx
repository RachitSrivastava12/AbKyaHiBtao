import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';
import happyGif from '../assets/happyGif.gif';

const Page = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const instagram = params.get('instagram');

  const [stage, setStage] = useState(0);

  const stages = [
    { question: 'Do you like me 🫣 ?', gif: gif1 },
    { question: 'are itne jldi na n karo 🥺😭', gif: gif2 },
    { question: 'HAYE RE AESE TARSE HUMKO HOGYE SAU ARSE RE', gif: gif3 },
  ];

  const handleNoClick = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      const button = document.querySelector('.no-btn');
      button.style.position = 'absolute';
      button.style.top = `${Math.random() * 80}%`;
      button.style.left = `${Math.random() * 80}%`;
    }
  };

  const handleYesClick = () => {
    setStage(stages.length);
  };

  return (
    <div>
      {stage < stages.length ? (
        <>
          <img src={stages[stage].gif} alt="gif" />
          <h2>{stages[stage].question}</h2>
          <button onClick={handleYesClick}>❤️</button>
          <button className="no-btn" onClick={handleNoClick}>💔</button>
        </>
      ) : (
        <>
          <img src={happyGif} alt="happy gif" />
          <h2>{`${name} likes you too 🤭`}</h2>
          <button onClick={() => window.location.href = `https://instagram.com/${instagram}`}>Send me a text 💘</button>
        </>
      )}
    </div>
  );
};

export default Page;
