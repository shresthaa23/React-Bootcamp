import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// http://localhost:5173/

const contacts = [
  { title: "Email", content: "ashrest6@terpmail.umd.edu", link: "mailto: ashrest6@terpmail.umd.edu" }, 
  { title: "Linkedin", content: "Alex Shrestha", link: "https://www.linkedin.com/in/shrestha2023" },
  { title: "Instagram", content: "@alex_shreds82", link: "https://www.instagram.com/alex_shreds82" },
  { title: "GitHub", content: "@shresthaa23", link: "https://github.com/shresthaa23"},
];


function HomePage() {
  return (
    <div className="header">
      <div className="intro_text">        
          <h1> Alex Shrestha </h1> 
          <h3> Welcome to my Website </h3>
      </div>
    </div>
  );
}


function AboutMe() {
  return (
    <div className="aboutMe">     
          <h2 className="title1"> About Me </h2> 
          <p className="life">
            Hey, I'm Alex. I'm currently an undergrad student @ <em>The University of Maryland College Park</em> studying <em>Computer Science</em>. 
            I'm apart of the <em>ACES LLP</em> and an <em>App Dev</em> Bootcamp member!     
            In my free time I like going to the <em>gym, playing games</em> and <em>watching shows</em>. I just finished Peaky Blinders and I'm currently watching Modern Family & Snowfall.
          </p>
    </div>
  );
}

function Experience() {

}

function Batman() {
// Lisan Al Gaib
}

function Technical() {

}

function ContactMe() {
  return (
    <div>
      <h2> Contact Me </h2> 
      <h3><a href="mailto: ashrest6@terpmail.umd.edu"> Email </a></h3>
      <h3><a href="https://www.linkedin.com/in/shrestha2023"> Linkedin </a></h3>
      <h3><a href="https://www.instagram.com/alex_shreds82"> Instagram </a></h3>
      <h3><a href="https://github.com/shresthaa23"> GitHub </a></h3>
    </div>

    );
}

function MyContacts({ title, content, link }) {
  return (
    <div className="socials">
      <h1>{title}</h1>
      <a href={link}>{content}</a>
    </div>
  );

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
      </>
      <>
        <AboutMe />
        <div className="contactsss">
            {contacts.map((element) => (
              <MyContacts title={element.title} content={element.content} link={element.link} />
            ))}
          </div>
          
      </>
   
    </>


  )
}

export default App
