import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'

import {Header} from './Header'
import Productos from './Productos'
import {Footer} from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Productos/>
    <Footer/>
  </React.StrictMode>,
)
