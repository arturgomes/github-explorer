import React from 'react';
import RepositoryItem from '../RepositoryItem'
export default function componentName() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
      <RepositoryItem
          repository="uniform"
          description="Forms in React"
          link="https://github.com/uniform/uniform"
        />
        <RepositoryItem
          repository="uniform"
          description="Forms in React"
          link="https://github.com/uniform/uniform"
        />
        <RepositoryItem
          repository="uniform"
          description="Forms in React"
          link="https://github.com/uniform/uniform"
        />
        <RepositoryItem
          repository="uniform"
          description="Forms in React"
          link="https://github.com/uniform/uniform"
        />
      </ul>
    </section>
  );
}
