import React from 'react'
import { Link } from 'react-router'

export default function MainLayout(props){
    return(
        <div className="container">
            {props.children}
        </div>
    )
}