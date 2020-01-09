import React from 'react';
import { Link } from 'react-router-dom'
    const Navbar = ()=>{
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Compras</Link>

                    <ul className="right">
                        <li><Link to="/">Loja</Link></li>
                        <li><Link to="/cart">Meu carrinho</Link></li>
                        <li><Link to="/cart">Icone</Link></li>
                    </ul>
                </div>
            </nav>
        )
        
    }

    export default Navbar;