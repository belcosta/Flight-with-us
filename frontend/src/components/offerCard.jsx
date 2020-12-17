import react from "react";
import "./offerCard.css"

export default function OfferCard(props) {
  const offer = props.offer;

  return (
    <div className="cardContainer">
      <div className="banner" style={{backgroundImage: `url(${offer.logo})`}}>
         </div>
      <h2>
        {offer.departure} to {offer.destination}
      </h2>
      <h4>departure time: {offer.hourOfStart}</h4>
      <h4>arrival time: {offer.hourOfLanding}</h4>
      <h3>Special price: {offer.price} €!!!</h3>
    </div>
  );
}
