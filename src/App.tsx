import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
    </div>
  );
};

export default App;
