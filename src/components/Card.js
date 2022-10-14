import React from 'react'

function Card(props) {

    return (
        <div className='PlayerCard'>
            <a href={props.profileURL}>
                <h1>{props.username}</h1>
            </a>
            {props.imageURL && <img src={props.imageURL} alt="Profile picture" />}
            <h3>{props.realName}</h3>
        </div>
    )
}

export default Card;