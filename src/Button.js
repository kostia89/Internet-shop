import React from "react";
export function Button(){
    const onclick = () => {
        console.log('ok');
    }
    return (
        <div>
            <button onClick = {onclick}>Open first modal</button>
            <button onClick = {onclick}>Open second modal</button>
        </div>
        
    )
}