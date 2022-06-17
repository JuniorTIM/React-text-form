import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (textError) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [textError]);

  const handleText = (e) => {
    setTextDirty(!e.target.value);
    setText(e.target.value);
    /*   if (!text|| textDirty || textError) {
     
      
     
    } else {
      setText(e.target.value);
      setTextError("");
    } */
  };

  const handleBlur = (e) => {
    if (!text) {
      setTextDirty(true);
    }
  };

  return (
    <div className="App">
      <form className="forma">
        <input
          value={text}
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleText(e)}
          className="submitInput"
          placeholder="Напишите текст..."
        ></input>
        <button disabled={valid} className="submitButton" type="submit">
          Отправить
        </button>
      </form>
      {textDirty && textError && <div>{textError}</div>}
    </div>
  );
}

export default App;
