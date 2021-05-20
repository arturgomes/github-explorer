import React from 'react';
import RepositoryItem from '../RepositoryItem'

const repository = {
  name:'uniform',
  description: 'forms in react',
  link: 'https://github.com/unform/unform'
}
export default function componentName() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
      <RepositoryItem
          repository={repository}
        />
        <RepositoryItem
         repository={repository}
        />
        <RepositoryItem
         repository={repository}
        />
        <RepositoryItem
          repository={repository}
        />
      </ul>
    </section>
  );
}
