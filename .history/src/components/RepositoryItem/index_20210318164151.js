import React from 'react';

export default function RepositoryItem({ props }) {
  return (
    <>
      <li>
        <strong>{props.repository}</strong>
        <p>{props.description}</p>
        <a href="">{props.link}</a>
      </li>
    </>
  );
}
