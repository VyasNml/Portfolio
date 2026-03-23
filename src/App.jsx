import Navbar from './components/Navbar';
import You from './components/You';
import Education from './components/Education';
import ShortProfile from './components/ShortProfile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
{/* Introduction & Summary, 
About Me ,
Skills & Technologies,
Projects, 
Certifications & Courses,
Experience (Internships & Work), 
Competitive Programming & Hackathons, 
Open Source Contributions (if any), 
Blog & Technical
Writing (Optional), 
Research Publication/Patent, 
Contact Section, 
downloadable resume (PDF format). */}

      <Navbar />
      <You />
      <ShortProfile />
      <Projects />
      {/* <Education /> */}
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
