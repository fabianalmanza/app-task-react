import React from 'react'
import {TaskContextProvider} from './context/TaskContext'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
    <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
