import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  // let myObj = {
  //   username:"LearnReact",
  //   age : 1
  // }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test </h1>
    <Cards username="Piyush" btnText="Click me" p="Hello, My name is Piyush chirote , I am software developer." />
    <Cards username= "Nitu" btnText="Visit me" p="Hello, My name is Nitu Kumari , I am junior software developer."/>
    </>
  )
}

export default App
