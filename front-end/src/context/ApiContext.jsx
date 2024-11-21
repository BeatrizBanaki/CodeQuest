import { createContext, useState } from 'react'
import axios from 'axios'

const ApiContext = createContext()

function ApiContextProvider({ children }) {
  const [text, setText] = useState(0)

  const data = {
    text, setText
  }

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiContextProvider }