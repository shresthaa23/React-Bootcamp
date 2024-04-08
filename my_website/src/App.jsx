import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contacts = [
  { title: "Email", content: "ashrest6@terpmail.umd.edu", link: "mailto: ashrest6@terpmail.umd.edu" }, 
  { title: "Linkedin", content: "Alex Shrestha", link: "https://www.linkedin.com/in/shrestha2023" },
  { title: "Instagram", content: "@alex_shreds82", link: "https://www.instagram.com/alex_shreds82" },
  { title: "GitHub", content: "@shresthaa23", link: "https://github.com/shresthaa23"},
];


function NavBar() {
  return (
    <nav className="navbar">
      <p href="/" className="myName">Alex Shrestha</p>
      <ul>
        <Cookies />
        <li>
          <a className="nav" href="/"> Home </a>
        </li>
        <li>
          <a className="nav" href="/"> About Me </a>
        </li>
        <li>
          <a className="nav" href="/"> Experience </a>
        </li>
        <li>
          <a className="nav" href="https://cdn.vox-cdn.com/thumbor/bz2Y1F1_NTbKLfnINojph4jGVzQ=/0x0:2880x1434/1200x800/filters:focal(1133x488:1593x948)/cdn.vox-cdn.com/uploads/chorus_image/image/71969421/Screen_Shot_2023_02_12_at_6.36.56_PM.0.png"> Batman </a>
        </li>
        <li>
          <a className="nav" href="/"> Technical </a>
        </li>
        <li>
          <a className="nav" href="https://i.kym-cdn.com/entries/icons/original/000/048/705/stilgar_dune.jpg"> Lisan Al Gaib </a>
        </li>
        <li>
          <a className="nav" href="/"> Contact Me </a>
        </li>
      </ul>
    </nav>
  );
}

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
          <h2 className="aboutMeTitle"> About Me </h2> 
          <p className="aboutMeText">
            Hey, I'm Alex. I'm currently an undergrad student @ <em>The University of Maryland College Park</em> studying <em>Computer Science</em>. 
            I'm apart of the <em>ACES LLP</em> and an <em>App Dev</em> Bootcamp member!
            In my free time I like going to the <em>gym, playing games</em> and <em>watching shows</em>. I just finished Peaky Blinders and I'm currently watching Modern Family & Snowfall.
          </p>
          <img class="myphoto" src="/images/me.jpg" alt="photo of me"></img>
    </div>
  );
}

function Batman() {
  return (
    <div className="batman">
      <h7> I am Batman. </h7>
    </div>
  );
}

function Technical() {
  return (
    <div className="tech">
      <div className="projects">
      <h2 className="projectsTitle"> Projects </h2>
        <div className="projectsText">
          <li>
            <a> This. </a>
          </li>
          <li>
            <a> Document Manager in C </a>
          </li>
          <li>
            <a> Maze Traversals in Java </a>
          </li>
          <li>
            <a> Data Analysis in Python </a>
          </li>
        </div>
        </div>
      <div className="languages">
      <h2 className="languagesTitle"> Languages </h2>
        <li>
            <a> Java </a>
          </li>
          <li>
            <a> C </a>
          </li>
          <li>
            <a> Python </a>
          </li>
          <li>
            <a> HTML/CSS </a>
          </li>
          <li>
            <a> JavaScript </a>
          </li>
          <li>
            <a> React </a>
          </li>
          <li>
            <a> Git </a>
          </li>
        <li className="joke">
          <a> last few may be a joke </a>
        </li>
        </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contacts">
      <div className="contactsTitle">
        <h1> Connect with me!</h1>
      </div>
      {contacts.map((element) => (
        <MyContacts title={element.title} content={element.content} link={element.link} />
      ))}
    </div>
  )
}
function MyContacts({ title, content, link }) {
  return (
    <div>
      <h3>{title}</h3>
      <a className="socials" href={link}>{content}</a>
    </div>
  );

}

function Cookies() {
  const [clicked, setClicked] = useState(0)

  return (
    <>
      <h1>{clicked}</h1>
        <div className="cookie">
          <button className="buttonCookie" onClick={() => {
              if (clicked + 10 > 500) {
                setClicked(clicked + 25)
              } else if (clicked + 5 > 250) {
                setClicked(clicked + 10)
              } else if (clicked + 3 > 200) {
                setClicked(clicked + 5)
              } else if (clicked + 2 > 100) {
                setClicked(clicked + 3)
              } else if (clicked + 1 > 50) {
                setClicked(clicked + 2)
              } else {
                setClicked(clicked + 1)
              }
          }}></button>
       </div>
    </>
  )


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
        <Batman />
        <Technical />
        <Contact />       
      </>   
    </>
  )
}

export default App
