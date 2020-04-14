import React, { useState } from "react";

import Header from "./components/Header";

function App() {

    const [projects, setProjects] = useState(['Projeto React', 'Projeto Mobile']);

console.log(projects);

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }
    return (<>
              <Header title="Projects"/> 
              
              <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
              </ul>

              <button type="button" onClick={handleAddProject}>Adicionar Projero</button>
            
            </>);
}

export default App;
