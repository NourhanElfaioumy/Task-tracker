import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; Nourhan Ali </p>
            <Link style={{textDecoration:'none', color:'red'}} to="/about">About</Link>
        </footer>
    )
}

export default Footer
