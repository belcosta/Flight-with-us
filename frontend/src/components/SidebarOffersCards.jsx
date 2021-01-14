import "../styles/SidebarOffersCards.css";
import { Button } from "react-bootstrap";

export default function SidebarOffersCards(props) {
  const offer = props.offers;

  return (
    <div
      className="cardContainer"
      style={{ backgroundImage: `url(${offer.background})` }}
    >
      <div className="cardDetails">
        <div
          className="banner"
          style={{ backgroundImage: `url(${offer.companyLogo})` }}
        ></div>
        <h2>
          <span className="cityName">{offer.departure}</span> to{" "}
          <span className="cityName">{offer.destination}</span>
        </h2>
        <h4>departure time: {offer.hourOfStart.slice(0, 5)}</h4>
        <h4>arrival time: {offer.hourOfLanding.slice(0, 5)}</h4>
        <h3>From {offer.price} €</h3>
        <Button type="submit">Reserve Seat</Button>
      </div>
    </div>
  );
}
