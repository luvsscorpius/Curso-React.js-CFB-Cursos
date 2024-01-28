import React from "react";

export default function Card({title, image, children}) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    )
}