import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profiles/profileContext';
import PeersContext from '../../context/peers/peersContext';
import GroupsContext from '../../context/groups/groupsContext';
import study from "../../images/study.png"

const Navbar = props => {
    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);
    const peersContext = useContext(PeersContext);
    const groupsContext = useContext(GroupsContext);

    const { isAuthenticated } = authContext;
    const { profile_exists } = profileContext;
    
    let navName = "text-center nav-item";

    const onLogout = () => {
        profileContext.logout();
        authContext.logout();
        peersContext.logout();
        groupsContext.logout();
    }

    const authLinks = (
        <Fragment>

            {profile_exists &&
            (<Fragment>
                <Link to="/studyview" className={navName}>Study</Link>
                <Link to="/groups" className={navName}>Groups</Link>
                <Link to="/peers" className={navName}> Peers </Link>
                {/*<Link to="/newgroup" className={navName}> NewGroup </Link>*/}
            </Fragment>)
            }
            <Link to="/home" className={navName}> Dashboard </Link>
            <a onClick={onLogout} href="#!" className={navName}> Logout </a>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <Link to="/" className={navName}>Home</Link>
            <Link to="/login" className={navName}>Login</Link>
            <Link to="/register" className={navName}>Register</Link>
        </Fragment>
    );

    return (
        <div className="navbar">
            <a className="navbar-brand" href="/">
                <div className="logo-image">
                        <img src= {study}  className="img-fluid" style={{width:"60px" , height:"60px"}}/>
                </div>
            </a>
            {/* <Link to="/home">
                <img src="../../images/study.png" alt="."/>
                <h1 className="navbar-brand">Group Study</h1>
            </Link> */}
            <div className="menu navs">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
            <input id="menu-toggle" className="menu-toggle text-center" type="checkbox" />
            <label htmlFor="menu-toggle">
                <i className="fas fa-bars"></i>
            </label>
            <div className="menu-toggle-items">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        </div>
    )
}

export default Navbar;