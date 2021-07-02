import React from 'react'
import {Link} from 'react-router-dom';


const Navigation = (props) => {
    return (
        <Link to={props.url} key={props.id}>
            {props.name}
        </Link>
    )
}
   

export default Navigation
