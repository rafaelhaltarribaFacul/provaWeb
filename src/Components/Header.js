import { Link } from "react-router-dom";
import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav>
          <ul>
            <li><a class="myFinance" href="/">MyFinance</a></li>
            <div class="menu">
              <li><a href="Home">Home</a></li>
              <li><a href="Ola">Transacoes</a></li>
            </div>
          </ul>
        </nav>

        </header>

    )
}

export default Header;