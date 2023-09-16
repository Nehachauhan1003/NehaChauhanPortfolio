
import Home from './components/home.js';
import Header from './components/header.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div className='snap-y snap-mandatory overflow-auto h-screen w-full'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      {/* 
      
     
      
       */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
