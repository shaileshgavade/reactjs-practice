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
                    <i className="blog--location-marker fa fa-map-marker"></i>
                    <span className="blog--location">{props.item.location}</span>
                    <span className="blog--map"><a href={props.item.googleMapsUrl} target="__blank">View on Google Maps</a></span>
                </div>
                <h2 className="blog--title">{props.item.title}</h2>
                <small className="blog--date">{props.item.startDate} - {props.item.endDate}</small>
                <p className="blog--description">{props.item.description}</p>
            </div>
        </div>
    );
}