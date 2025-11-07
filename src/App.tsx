import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });

  return (
    <div className='bg-white dark:bg-black relative '>
      <Navbar {...{ theme, setTheme }} />
      <Hero />
      <TrustedBy />
      <Services/>
    </div>
  );
};

export default App;
