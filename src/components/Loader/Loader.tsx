import React from 'react'
import "./style.css"

interface LoaderProps {
    duration: string;
    dotColor: string;
    backgroundDim: number;
    show: boolean;
}

function Loader({duration, show, dotColor, backgroundDim}: LoaderProps) {
    return (
        <div className={`loader ${show ? "show" : ""}`}>
            <div className="dot-holder">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Loader