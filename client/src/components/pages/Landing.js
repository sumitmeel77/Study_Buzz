import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Landing = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            return <Redirect to='/home'/>;
        }
    }, [isAuthenticated]);

    return (
        <div className="newSection">
        <section className="glass">
        <h1 className="p-1 landing-title"> Study Buzz </h1>
            <h2 className="p-1 landing-subtitle"> A platform for Academic activities </h2>
            <p className="p-1 landing-p"> Don't know anyone in your classes? </p>
            <p className="p-1 landing-p">Can't find peers for your courses? </p>
            <p className="p-1 landing-p">Want to meet others fellows of your classes?</p>
            <p className="p-1 landing-p">Study Buzz is platform with all in one solution of peer study. </p>
            <h2 className="p-1 landing-subtitle" style={{textAlign:"right",marginTop:"60px"}}> -by Sumit Meel </h2>
            </section>
            <div className="circle1"></div>
            <div className="circle2"></div>  
        </div>   
    )
}

export default Landing;