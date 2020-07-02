import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';
import AboutText from '../About/AboutText';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact} />
            {/* https://dev.to/cesareferrari/using-the-route-render-prop-in-react-k5a */}
            <Route exact path='/about' render={ () => <AboutText/>} />
          </Switch>
        </div>
      </div>
    )
  }
}