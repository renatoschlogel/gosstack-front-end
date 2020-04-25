import React, { useState, useEffect} from "react";

import './App.css';

import Header from "./components/Header";

import api from "./services/api";

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      api.get('projects').then(response => {
        setProjects(response.data);
      });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
          title: `Projeto ${Date.now()}`,
          owner: 'Renato W Schlogel'
        });

        setProjects([...projects, response.data]);
    }
    return (<>
              <Header title="Projects"/> 
          
              <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
              </ul>

              <button type="button" onClick={handleAddProject}>Adicionar Projero</button>
            
            </>);
}

export default App;
