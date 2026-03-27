"use client"
import {
  About, Contacts, Education,
  Experience, Landing, Navbar, Projects, Skills,
  WhatsAppButton
} from '../components';

function HomePage() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contacts />
      <WhatsAppButton />
    </>
  )
}

export default HomePage;