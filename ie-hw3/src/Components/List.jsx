import React from 'react';
import Row from './Row';

function List(props) {
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
       name={item.name}
       date={item.date}
       title={item.title}
       field={item.field}
       old_value={item.old_value}
       new_value={item.new_value}
       />)} 
       
    
    </table>
    
  )
}

export default List;