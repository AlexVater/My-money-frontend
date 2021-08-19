import React from 'react'

const MenuItem = props => {
    return (
        <li className="list-item pl-4 pr-12 py-4 text-gray-500 hover:text-green-500 hover:bg-gray-700 transition">
            {props.title}
        </li>
    )
}

export default MenuItem
