import React from 'react';
import ContatoItem from './contatoItem';

export default function contactList(list) {

  return (
    <ul >
      {list.map(item => (
        <ContatoItem
          key={item.id}
          item={item}
          removeContato={props.removeContato}
        />
      ))}
    </ul>
  )
}
