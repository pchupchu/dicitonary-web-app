import "./Word.css";

function Word() {
  return (
    <div className="word">
      <div className="word__container">
        <h1 className="word__name">keyboard</h1>
        <p className="word__transcription">/ˈkiːbɔːd/</p>
      </div>
      <button className="word__button" aria-label="playback"></button>
    </div>
  );
}

export default Word;
