import React from 'react';
import ContatoItem from './contatoItem';

export default (props) => {

  return (
    <ul >
      {props.items.map(item => (
        <ContatoItem
          key={item.id}
          item={item}
          removeContato={props.removeContato}
        />
      ))}
    </ul>
  )
}
