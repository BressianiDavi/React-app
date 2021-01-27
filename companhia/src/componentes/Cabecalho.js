import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='#myNavbar'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to='/'>
              Logo
            </Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/'>INICIO</Link>
              </li>
              <li>
                <Link to='/servicos'>SERVICOS</Link>
              </li>
              <li>
                <Link to='/portfolio'>PORTFOLIO</Link>
              </li>
              <li>
                <Link to='/precos'>PREÇOS</Link>
              </li>
              <li>
                <Link to='/contatos'>FALE CONOSCO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Cabecalho