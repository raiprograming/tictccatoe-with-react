import React from "react";
import {useState,useEffect} from "react";
import {Box} from "./box.js";
import styles from "./board.module.css";
import {winner,filled} from "./store.js";
export const Board=(props)=>{
    const [moves,setMoves]=useState([Array(9).fill(null)]);
    const [history,setHistory]=useState([]);
    const [xIsNext,setXIsNext]=useState(true);
    let [wn,setWn]=useState("");
    let [nxt,setNxt]=useState("");
    console.log(moves);
    const handleClick=(index)=>{
        let mov=moves;//.slice();
        mov[index] = xIsNext ? "x" : "0";
        let hist=history;
        hist.push(xIsNext?"0":"x");
        setMoves(mov);
        setHistory(hist);
        setXIsNext(!xIsNext);
        setNxt(xIsNext ? "0" : "x");
        if(winner(mov)){
        setWn(<h1 className={styles.win}>{mov[index]} wins the Game</h1>)

        }
        if(filled(mov) && !winner(mov)){
            setWn(<h1 className={styles.win}> Game Tie</h1>)       
        }
        
    };
    const reset=()=>{
        setMoves([Array(9).fill(null)]);
        setHistory([]);
        setXIsNext(true);
        setNxt("");
        setWn("");
    }
    /*useEffect(()=>{
        console.log("useefect called")
        setMoves(["x","x","x","x","x","x","x","x","x"]);
    },[sign]);
    const hd=(pp)=>{
        setSign(!sign);
    };*/
    return(
        <div>
        <div className={styles.board}>

            <div className={styles.box}>
            <Box mov={moves[0]} hc={handleClick} ind={0}/></div>
            <div className={styles.box}>
                <Box mov={moves[1]} hc={handleClick} ind={1} /></div>
            <div className={styles.box}>
                <Box mov={moves[2]} hc={handleClick} ind={2}/></div>
            <div className={styles.box}>
                <Box mov={moves[3]} hc={handleClick} ind={3} /></div>
            <div className={styles.box}>
                <Box mov={moves[4]} hc={handleClick} ind={4} /></div><div className={styles.box}>
                <Box mov={moves[5]} hc={handleClick} ind={5} /></div><div className={styles.box}>
                <Box mov={moves[6]} hc={handleClick} ind={6}/></div><div className={styles.box}>
                <Box mov={moves[7]} hc={handleClick} ind={7}/></div><div className={styles.box}>
                <Box mov={moves[8]} hc={handleClick} ind={8}/></div>
                
                
        </div>
    <h1>next move:{nxt}</h1>
            <div className={styles.windiv}>
                {wn}
            </div>
            <button className={styles.btn} onClick={(e)=>{reset()}}>reset</button>
        </div>
    )
};
