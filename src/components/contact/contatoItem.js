import React from 'react';

export default (props) => {
  function deleteContato(event) {
    event.preventDefault();
    props.removeItem(props.intem.id)
  }

  return (
    <li >
      <span onClick={deleteContato}>x</span>
    </li>
  )
}
