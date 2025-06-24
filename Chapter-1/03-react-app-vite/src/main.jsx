import React from "react"
import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'

function Helloworld() {
  return "Hello World Akshat" 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Helloworld/>
  </StrictMode>,
)
