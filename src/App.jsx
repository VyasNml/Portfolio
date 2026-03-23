import Navbar from './components/Navbar';
import You from './components/You';
import ShortProfile from './components/ShortProfile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import OpenSource from './components/OpenSource';
import Blog from './components/Blog';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <You />
      <ShortProfile />
      <Skills />
      <Projects />
      {/* <Certifications /> */}
      {/* <Experience /> */}
      <CompetitiveProgramming />
      {/* <OpenSource /> */}
      {/* <Blog /> */}
      {/* <Research /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
