import { createContext, useState } from 'react'
import axios from 'axios'

const ApiContext = createContext()

function ApiContextProvider({ children }) {
  const [text, setText] = useState(0)
  const [inputValue, setInputValue] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [feedback, setFeedback] = useState("");

  const data = {
    text, setText,
    inputValue, setInputValue,
    currentPosition, setCurrentPosition,
    feedback, setFeedback
  }

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiContextProvider }