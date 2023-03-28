import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from './LinkButton';
import ProjectCard from '../project/ProjectCard';


export default function Projects() {
  const [projects, setProjects] = useState([]);
  //const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  //I'll take what comes from the message w this hook
  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function deleteProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Project has been deleted!');
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects .: </h1>
        <LinkButton to="/newproject" text="Create Project" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category ? project.category.name : "none"}
            key={project.id}
            handleRemove={deleteProject}
          />)}
      </Container>
    </div>
  );
}
