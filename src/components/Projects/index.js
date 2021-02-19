import React from 'react';
import { jobs } from '../../utils/jobs';
import CardProject from '../CardProject';
import Footer from '../Footer';
import Navigation from '../Navigation';

import { C } from './styles';

const Projects = () => {
  return (
    <C.Container id="projects">
      <Navigation />
      <C.Content className="container">
        {jobs.map((item) => (
          <CardProject
            key={item.id}
            name={item.name}
            description={item.description}
            background={item.background}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};

export default Projects;
