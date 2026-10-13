import React, { useState } from "react";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import ProjectDetail from "./components/section/ProjectDetail";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  if (activeProject) {
    return (
      <div className="App">
        <ProjectDetail 
          project={activeProject} 
          onBack={() => setActiveProject(null)} 
        />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="section-header-bg">
        <Header />
      </div>
      <div className="section-about-bg">
        <About />
      </div>
      <div className="section-works-bg">
        <Works onOpenProject={(proj) => setActiveProject(proj)} />
      </div>
      <Contact />
    </div>
  );
}

export default App;
