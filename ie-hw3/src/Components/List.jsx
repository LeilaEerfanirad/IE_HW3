import React from 'react';
import Row from './Row';

function List(props) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
  const handleFavoriteClick = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.includes(id)) {
      
      const updatedFavorites = favorites.filter(fav => fav !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return false;
      
    } else {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
     return true;
    }
  };
  
  return (
    <table>
        <tr>
            <th>مقدار جدید</th>
            <th>مقدار قبلی</th>
            <th>فیلد</th>
            <th>نام آگهی</th>
            <th>تاریخ</th>
            <th>نام تغییر دهنده</th>
        
        </tr>
    
       {props.items.map(item => <Row 
       key={item.id}
       id={item.id}
       name={item.id}
       date={item.date}
       title={item.title}
       field={item.field}
       old_value={item.old_value}
       new_value={item.new_value}
       isFavorite={favorites.includes(item.id)}
       onFavoriteClick={handleFavoriteClick}
       />)} 
       
    
    </table>
    
  )
}

export default List;