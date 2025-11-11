import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import { OurWork } from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });
  const outlineRef = useRef(null);

  return (
    <div className='bg-white dark:bg-black relative '>
      <Navbar {...{ theme, setTheme }} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer {...{ theme }} />

      {/* <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border  border-primary pointer-events-none z-[9999]'></div> */}
    </div>
  );
};

export default App;
