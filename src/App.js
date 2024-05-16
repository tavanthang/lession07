import React from 'react'
import TVTuseState from './component/TVTuseState'
import TVTuseEffect from './component/TVTuseEffect'
import TVTuseContex from './component/TVTuseContex'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>TA VAN THANG - hook</h1>
      <hr/>
      <TVTuseState /> 
      <hr/>
      <TVTuseEffect />
      <hr/>
      <TVTuseContex />
    </div>
  )
}