import React from 'react';
import './App.css'
import AllRoutes from './Pages/AllRoutes'
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <div className='App'>
      <Toaster />
      <AllRoutes />
    </div>
  )
}

export default App
