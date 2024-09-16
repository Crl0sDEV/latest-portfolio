import React from 'react';
import Navbar from './components/Navbar';
import './output.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      </section>

      <section id="about" className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
      </section>

      <section id="skills" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Skills</h2>
      </section>

      <section id="projects" className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Projects</h2>
      </section>
    </>
  );
}

export default App;

