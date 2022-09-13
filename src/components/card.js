import './card.css'

const Card = (props) => {
    return (  

        
        
        <div className="card">

            <img src={props.item.imageUrl} className="card_img"/>

            <div className ="card_content">
                <div className = "location_container">
                    <span className="location"><img src="assets/pinpoint.png" className="pinImg"/>{props.item.location}</span>
                    <a href = {props.item.googleMapsUrl} className ="googleLoc">View on Google Masps</a>
                </div>
                <h1>{props.item.title}</h1>
                <div className = "timePeriod">
                    {props.item.startDate} - {props.item.endDate}
                </div>
                <p className = "cardDescription">
                {props.item.description}
                </p>
            </div>

        </div>
    );
}
 
export default Card;