import React from 'react';

export default function contactItem(item) {
  function deleteContato(event) {
    event.preventDefault();
    props.removeItem(item.id)
  }

  return (
    <li >
      <span onClick={deleteContato}>x</span>
    </li>
  )
}
