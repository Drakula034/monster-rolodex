/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './card.component.styles.css'

export const Card = (props)=>(
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className='card-container'>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="image" />
        <h2> {props.monster.name}</h2>
        <p>{props.monster.email}</p>

    </div>
);