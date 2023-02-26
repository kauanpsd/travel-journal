import React from "react"


export default function MainSection(props){
    return(
        
        <>
            <div className="main-content">
                <img className="main-image" src={props.imageUrl} alt=""  />
                <div className="content">
                    <div className="location">
                        <div className="place">
                            <img src="public\IconLocation.svg" alt="" className="icon" />
                            <p>{props.location}</p>
                        </div>
                        <a href={`${props.googleMapsUrl}`} className="google-maps">View on Google Maps</a>
                    </div>
                    <h1 className="title-location">
                        {props.title}
                    </h1>
                    <div className="more-info">
                        <h3 className="date">
                            {props.startDate} - {props.endDate}
                        </h3>
                        <p className="info-country">
                        {props.description}
                        </p>
                    </div> 
                </div>
                
            </div>
            <hr/>
            
        </>
    )
}