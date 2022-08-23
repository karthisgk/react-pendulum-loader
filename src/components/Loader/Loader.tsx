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
        <div className={`loader ${show ? "show" : ""}`} style={{
            "--animate-deplay": duration || "1.8s",
            "--dot-color": dotColor || "rgb(134 140 249)",
            "--bg-dim": backgroundDim || .7
        } as React.CSSProperties}>
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