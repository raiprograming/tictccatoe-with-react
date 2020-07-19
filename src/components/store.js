import React from "react";
export function winner(bx){
    const cmb=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ];
    for(let i=0;i<cmb.length;i++){
        let a=cmb[i][0];
        let b=cmb[i][1];
        let c=cmb[i][2];
        if(bx[a]===bx[b] && bx[b]===bx[c] && bx[a]===bx[c] && bx[a]!=null){
            return true;
        }
    }
    return false;
};
export function filled(bx){
    console.log(bx);
    let cnt=0;
    bx.forEach((item)=>{
        if(item!=null){
            cnt=cnt+1;
        }
    }
    );
    if(cnt==9){
        console.log("returned true");
        return true
    }
    else{
        return false;
    }
    
}