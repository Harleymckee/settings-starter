import React, { Component } from 'react';
import logo from './autofi-logo-retro-w-200.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './admin-style.css';
import './App.css';

// JSX transposed from adminLayout.pug
class App extends Component {
  render() {
    return (
      <div id="Wrapper">
        <nav className='navbar-default navbar-static-side navbar-fixed-custom' role='navigation'>
          <div className='sidebar-collapse'>
            <ul id='side-menu' className='nav metismenu'>
              <li className='nav-header'>
                <div className='dropdown profile-element'>
                  <div style={{padding: '10px'}}>
                    <img src={logo} width='100'/>
                  </div>
                  <a className='dropdown-toggle' dataToggle='dropdown' href='#'>
                    <span className='clear'>
                      <span className='block m-t-xs'>
                        <strong className='font-bold'>
                          Autofi {/* dynamic on other site -- dealer specific */}
                        </strong>
                      </span>
                      <span className='text-muted text-xs-block'>
                        username ull
                        <b className='caret'/>
                      </span>
                    </span>
                  </a>
                  <ul className='dropdown-menu animated fadeInRight m-t-xs'>
                    <li>
                      <a href='/user'>
                        Account
                      </a>
                    </li>
                    <li className='divider' />
                    <li>
                      <a href='/logout'>
                        Logout
                      </a>
                    </li>
                  </ul>
                  <div className='logo-element'>
                    <img src='' /> {/* TODO */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;