import React from 'react';

export default function componentName() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem
          repository={ }
          description="Forms in React"
          link="https://github.com/uniform/uniform"
        />
        <li>
          <strong>uniform2</strong>
          <p>forms in react</p>
          <a href="">Acessar repositorio</a>
        </li>
        <li>
          <strong>uniform</strong>
          <p>forms in react</p>
          <a href="">Acessar repositorio</a>
        </li>
        <li>
          <strong>uniform</strong>
          <p>forms in react</p>
          <a href="">Acessar repositorio</a>
        </li>
      </ul>
    </section>
  );
}
