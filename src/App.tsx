import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are You Sure?",
  "Really?",
  "Really Sure?",
  "Stinky, You Sure?",
  "I'm Gonna Cry... ;(",
  "You're Breaking My Heart",
  "Press this if you hate sunflowers 🌻",
  "Press yes.",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    const index = noCount % phrases.length;
    return phrases[index];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/4s5GO9wA0-4AAAAC/cute-cow.gif"
            width="480"
            height="439"
            alt="Valentine's Day gif"
          />
          <div className="text">Yay! I'll pick you up 🫀</div>
        </>
      ) : (
        <>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdrZ3pldjJiMmpsc2szYTE1dHVtMHE4OTVlaHF6cGV6bzVqbmo1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6CAFIoo26LkJxjk3Gc/giphy.gif"
            width="480"
            height="439"
            alt="Valentine's Day gif"
          />
          <div className="text">Will you be my valentines?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
