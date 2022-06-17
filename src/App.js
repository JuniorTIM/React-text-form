import React, { useState } from "react";
import "./styles.css";

function App() {

const [text, setText] = useState('')
const [message, setMessage] = useState("");
const [isEmpty, setIsEmpty] = useState(true)
const [message2, setMessage2] = useState('')
const [inputClass, setInputClass] = useState('no-err')

const handleText = (e) => {
  setText(e.target.value)
  setMessage2('')
  setInputClass('no-err')
  if (text === '') {
    setIsEmpty(false)
  }
}

const handleBlur = (e) => {
    if (!text) {
      setInputClass('is-error')
      setMessage2('')
      setMessage("Поле ввода не должно быть пустым");
    } else if (text !== "") {
      setMessage("")
    }
  }

const handleSubmit = (e) => {
  e.preventDefault()
}

const handleClick = (e) => {
  console.log(text)
  setText('')
  setMessage2('Сообщение отправлено')
  setIsEmpty(true)
}

 return (
  <div className="App">
      <form onSubmit={handleSubmit} className="forma">
        <input
        value={text}
          className={inputClass}
          onChange={handleText}
          onBlur={(e) => handleBlur(e)}
          placeholder="Напишите текст..."
        ></input>
        <button onClick={handleClick} disabled={isEmpty} className="submitButton" type="submit">
          Отправить
        </button>
      </form>
      {text === '' ? <div className="is-er">{message2}</div> : ''}
      <div className='is-err'>{text === '' ? message : ''}</div>
    </div>
 )
}

export default App;
