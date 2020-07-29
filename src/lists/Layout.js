import React from 'react'
import { Link } from 'react-router'

export default function ListLayout(props) {
    return (
        <div>
            <div>
                <h1>Hello!</h1>
                <br/>
                <h2>My name is David Yu.</h2>
                <p>But you can call me Dave. I'm a Junior at Yale in the Computing and the Arts joint program, studying Architecture and Computer Science.</p>
            </div>

            <br/>

            <div>
                <h2>Browse my work...</h2>
                <span>
                    <Link to="/experiences">By experience</Link>
                    <Link to="/categories">By category</Link>
                    <Link to="/skills">By skills</Link>
                </span>
            </div>

            <div>
                {props.children}
            </div>

        </div>
    )
}