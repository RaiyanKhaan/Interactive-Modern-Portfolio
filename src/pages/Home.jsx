import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sanjana Maria | Portfolio</title>
        <meta name="description" content="Sanjana Maria - Computer Science & Engineering Graduate from North South University. Passionate about AI, Machine Learning & Web Development." />
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
