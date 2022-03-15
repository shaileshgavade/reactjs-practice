import React from "react";
import ReactDOM from "react-dom";


export default function BlogPreview(props) {
    return (
        <div className="blog--preview">
            <div className="blog--img">
                <img src={props.item.imageUrl} className="blog--thumbnail" />
            </div>
            <div className="blog--info">
                <div>
                    <span>{props.item.location}</span>
                    <span>View on Google Maps</span>
                </div>
                <h2>{props.item.title}</h2>
                <p>{props.item.startDate} - {props.item.endData}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}