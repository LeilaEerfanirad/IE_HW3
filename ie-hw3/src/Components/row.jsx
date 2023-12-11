import React from 'react'

function Row(props) {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.date}
      </td>
      <td>
        {props.title}
      </td>
      <td>
        {props.field}
      </td>
      <td>
        {props.old_value}
      </td>
      <td>
        {props.new_value}
      </td>
    </tr>
  )
}

export default Row