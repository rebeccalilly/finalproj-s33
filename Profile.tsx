import React from 'react';
import { Button } from '@material-tailwind/react';
import "./style.css";

function Profile() {
    return (
        <>
            <div className='flex flex-col'>
                <h1 className='welcome'>Welcome, Rebecca</h1>
                <Button className='new_button' color="black">Create New List</Button>
            </div>
        </>
    )
}

export default Profile