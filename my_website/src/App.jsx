import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// http://localhost:5173/

function HomePage() {
  return (
    <div class="header">
    <div class="intro_text">        
        <h1> Alex Shrestha </h1> 
        <h2> Welcome to my Website </h2>
    </div>
  </div>
  );
}

function AboutMe() {

}

function Experience() {

}

function Batman() {
// Lisan Al Gaib
}

function Technical() {

}

function ContactMe() {

}


function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="myName">Alex Shrestha</a>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/"> About Me </a>
        </li>
        <li>
          <a href="/"> Experience </a>
        </li>
        <li>
          <a href="https://cdn.vox-cdn.com/thumbor/bz2Y1F1_NTbKLfnINojph4jGVzQ=/0x0:2880x1434/1200x800/filters:focal(1133x488:1593x948)/cdn.vox-cdn.com/uploads/chorus_image/image/71969421/Screen_Shot_2023_02_12_at_6.36.56_PM.0.png"> Batman </a>
        </li>
        <li>
          <a href="/"> Technical </a>
        </li>
        <li>
          <a href="https://i.kym-cdn.com/entries/icons/original/000/048/705/stilgar_dune.jpg"> Lisan Al Gaib </a>
        </li>
        <li>
          <a href="/"> Contact Me </a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <><>
      <NavBar />
    </><>
        <HomePage />
      </></>    
  )
}

export default App
