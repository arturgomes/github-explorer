
import React, {useState,useEffect} from 'react';
import RepositoryItem from '../RepositoryItem'

import "../../styles/repositories.scss"
interface Repository {
  name:string;
  description:string;
  html_url:string


}

export default function componentName() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(r => setRepositories(r))

  },[])
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {repositories.map(r => <RepositoryItem key={r.name} repository={r} />)}
      </ul>
    </section>
  );
}

