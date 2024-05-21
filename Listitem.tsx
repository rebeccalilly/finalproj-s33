import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import "./style.css"

interface Props {
    color: string;
}

function Listitem({ color }: Props) {
    return (
        <div className='flex flex-row'>
            <Checkbox color={color}></Checkbox>
            <input type="text" placeholder="New item" className='border-none outline-none' />
        </div>
    )
}

export default Listitem