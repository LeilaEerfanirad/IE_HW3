import React, { useState } from 'react';

function Row(props) {
  
  const [rowStyle,setRowStyle] = useState({
    backgroundColor: props.isFavorite ? 'green' : 'inherit' ,
    color: props.isFavorite ? 'white' : 'inherit'
  });
  const [btnTxt,setBtnStyle] = useState({
    color: props.isFavorite ? 'green' : 'black',
    txt: props.isFavorite ? 'UnMark Favorite' : 'Mark as Favorite'}
  );
  
  const handleFavoriteClick = () => {
    const f = props.onFavoriteClick(props.id);
   
    setRowStyle();
    setBtnStyle();
  };
  return (
    <tr style={rowStyle}>
      <td>{props.new_value}</td>
      <td>{props.old_value}</td>
      <td>{props.field}</td>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>
      <button onClick={handleFavoriteClick} style={btnTxt}>
        favorite
      </button>
      </td>
    </tr>
  )
}

export default Row;