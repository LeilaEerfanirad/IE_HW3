import React from 'react';

function Row(props) {
  const handleFavoriteClick = () => {
    // Toggle the favorite status and update local storage
    props.toggleFavorite(props.id);
  };
  return (
    <tr>
      <td>{props.new_value}</td>
      <td>{props.old_value}</td>
      <td>{props.field}</td>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>
      <button onClick={handleFavoriteClick}>
          {props.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </td>
    </tr>
  )
}

export default Row;