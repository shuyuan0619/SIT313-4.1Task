import React from 'react';
import Card from './Card';
import List from './List';
import './css/Card.css';

const Tutorial = () => {
  return (
    <div className='row'>
      {
        List.map((item, index) => index > 2 ?
          <Card
            image={item.image}
            name={item.name}
            description={item.description}
            star={item.star}
            author={item.author}></Card> : <div></div>
        )
      }
    </div>
  );
};
export default Tutorial;
