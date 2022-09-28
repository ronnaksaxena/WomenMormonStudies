import React from "react";

import classes from './Home.module.css'
import WebImage from "../componenet/WebImage";




export default function Vision(){
    return(
        <div className={classes.parent}>
            <h1 id="vision"></h1>
            <div className={classes.child}>
                <p className = {classes.text} id="our mission">This will be the vision page</p>
            </div>
            <div className={classes.child}>
                <WebImage alt="a decorative tree"/>
            </div>
                
        </div>
    )
}