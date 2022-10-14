import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';

function UserInput() {

    const [userData, setUserData] = useState([]);
    const [message, setMessage] = useState('');

    const notify = () => toast("Wow so easy !");

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const handleClick = async(e) => {
        e.preventDefault();

        try {
            await fetch(`${baseURL}${message}`)
                .then((response) => response.json())
                .then((data) => setUserData(data));
        } catch (error) {
            console.log('Error: ' + error);
        }
    }

    const baseURL = "https://playerdb.co/api/player/steam/"

    return (
        <div className='UserInput'>
            <form>
                <input 
                    type='text' 
                    id='userID' 
                    name="message" 
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Find</button>
            </form>

            {userData.success === false 
            ? <h1>Error: User not found.</h1>
            : <Card 
                username={userData?.data?.player?.username}
                imageURL={userData?.data?.player?.avatar}
                profileURL={userData?.data?.player?.meta?.profileurl}
                realName={userData?.data?.player?.meta?.realname}
            />}

            
            <ToastContainer />
        </div>
    )
}

export default UserInput;