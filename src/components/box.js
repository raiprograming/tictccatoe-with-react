import React from "react";
import styles from "./box.module.css";
export const Box=(props)=>{
        let ind=props.ind;
        return(
            <div className="container">
            <button className={styles.box} onClick={(e)=>{props.hc(ind)}}>{props.mov}</button>
            </div>
        );
};