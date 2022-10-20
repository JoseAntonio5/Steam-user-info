import React from 'react';
import './Card.css';

function Card(props) {

    var message = '';

    if(props.ProfileVisibility === 3) {
        message = "Profile Visibility: Public"
    } else if (props.ProfileVisibility === 1) {
        message = "Profile Visibility: Private/Friends Only"
    }

    return (
        <div className={props.id ? 'Card' : ''}>
            <a href={props.profileURL}>
                <h1>{props.username}</h1>
            </a>
            <p>{props.id}</p>
            {props.imageURL && <img srC={props.imageURL} alt="Profile picture" />}
            <h3>{props.realName}</h3>
            <h5>{message}</h5>
        </div>
    )
}

export default Card;