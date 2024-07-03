import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import sorry from "./assets/sorry.png"
import "./index.css"

function renderYoutube(){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <App /> 
    </BrowserRouter>
  )
}

function renderSupport(){

  ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="compatible">
      <img src={sorry} />
      <h4>Move to a Big Screen to Experience</h4>
    </div>
  )
}

const compatible = window.innerWidth > 450

compatible ? renderYoutube() : renderSupport()
                
