import React from 'react';

function Row(props) {
  return (
    <tr>
      <td>{props.new_value}</td>
      <td>{props.old_value}</td>
      <td>{props.field}</td>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.name}</td>
    </tr>
  )
}

export default Row;