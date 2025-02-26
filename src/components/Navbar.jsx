import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div
                className='menubutton'
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};
