import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  const userData = {
    name: "siddhi",
    email: "jangamsiddhi@gmail.com",
    role: "MERN Developer"
  };

  const serviceData = {
    service1: "Web Development",
    service2: "App Development",
    service3: "UI/UX Design"
  };

  return (
    <>
      <Home />
      <About userData={userData} />
      <Contact />
      <Services serviceData={serviceData} />
    </>
  );
}

export default App;
