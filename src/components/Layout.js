import React, { Component } from 'react';
import logo from '../autofi-logo-retro-w-200.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Layout extends Component {
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
                  <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
                    <span className='clear'>
                      <span className='block m-t-xs'>
                        <strong className='font-bold'>
                          Autofi {/* dynamic on other site -- dealer specific */}
                        </strong>
                      </span>
                      <span className='text-muted text-xs-block'>
                        username full
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
              <li>
								<Link to='/'>
                  <i className='fa fa-plus' />
                  <span className='nav-label'>
											Home
                  </span>
								</Link>
              </li>
              <li>
								<Link to='/tabone'>
                  <i className='fa fa-plus' />
                  <span className='nav-label'>
											Tab One
                  </span>
								</Link>
              </li>
              <li>
								<Link to='/tabtwo'>
                  <i className='fa fa-plus' />
                  <span className='nav-label'>
                    Tab Two
                  </span>
                </Link>
              </li>
              <li>
								<Link to='/tabthree'>
                  <i className='fa fa-plus' />
                  <span className='nav-label'>
                    Tab Three
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id='page-wrapper' className='gray-bg dashbard-1'>
          <div className='row border-bottom'>
            <nav className='navbar navbar-static-top' role='navigation' style={{marginBottom: 0}}>
              <div className='navbar-header'>
                <a className='navbar-minimalize minimalize-styl-2 btn btn-primary' href='#'>
                  <i className='fa fa-bars fa-nomargin' />
                </a>
              </div>
              <ul className='nav navbar-top-links navbar-right'>
                <li>
                  <span className='m-r-sm text-muted'>
                    Autofi
                  </span>
                </li>
                <li className='dropdown'>
                  <a className='dropdown-toggle count-info' data-toggle='dropdown' href='#'>
                    <i className='fa fa-bell' />
                  </a>
                  <ul className='dropdown-menu dropdown-alerts'>
                    <li className='text-center link-block'>
                      <a href='#'>
                        <strong>
                          See All Alerts
                        </strong>
                        <i className='fa fa-angle-right' />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='/logout'>
                    <i className='fa fa-sign-out' />
                    Log Out
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
						{this.props.children}
          </div>
          <div className='footer'>
            <div className='pull-right'>
              v <strong> 0.0.1 </strong>
            </div>
            <div>
              <strong>Copyright</strong> AutoFi, Inc. © 2017
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;