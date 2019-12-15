import React from 'react';
import './card.styles.css';
export const Card = (props) => {
  return <div className="card-container">
    <img 
      alt="friends"
      src={`https://robohash.org/${props.friend.id}?set=set5&size=180x180`}>
    </img>
    <h2>{ props.friend.name } </h2>
    <p>{ props.friend.email }</p>
  </div>
}; 