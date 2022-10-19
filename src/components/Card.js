import React from 'react';
import './Card.css';

function Card(props) {

    return (
        <div className={props.id ? 'Card' : ''}>
            <a href={props.profileURL}>
                <h1>{props.username}</h1>
            </a>
            <p>{props.id}</p>
            {props.imageURL && <img srC={props.imageURL} alt="Profile picture" />}
            <h3>{props.realName}</h3>
        </div>
    )
}

export default Card;