import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import styles from '../browse/browse.module.css';

const Browse=props =>{
 return(
   <BrowserRouter>
    <nav>
        <ul className={styles.nav}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
    </nav>

    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route  path='/about'>
        <About/>
      </Route>
      <Route  path='/contacts'>
        <Contacts/>
      </Route>
      <Route  path='/dashboard'>
        <Dashboard/>
      </Route>
    </Switch>
   </BrowserRouter>
 );
};

const Home = ()=> <div>Home page</div>;
const About = ()=> <div>About page</div>;
const Contacts = ()=> <div>Contacts page</div>;
const Dashboard = ()=> <div>Dashboard page</div>;
export default Browse;