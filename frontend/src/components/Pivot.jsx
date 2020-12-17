import react, { useState } from "react";
import "./pivot.css";
import OfferCard from "./offerCard";

export default function SidebarSpecialOffers() {
  const [offers, setOffers] = useState({
    specialOffers: [
      {
        departure: "Berlin",
        destination: "London",
        hourOfStart: "07:00",
        hourOfLanding: "09:00",
        price: "23,00",
        logo: "https://bit.ly/3mDx67S",
      },
      {
        departure: "Stockholm",
        destination: "Amsterdam",
        hourOfStart: "10:00",
        hourOfLanding: "11:00",
        price: "17,00",
        logo: "https://bit.ly/3mDx67S",
      },
      {
        departure: "Prague",
        destination: "Brussels",
        hourOfStart: "11:00",
        hourOfLanding: "13:00",
        price: "24,00",
        logo: "https://bit.ly/3mDx67S",
      },
      {
        departure: "Paris",
        destination: "Bilbao",
        hourOfStart: "19:00",
        hourOfLanding: "22:30",
        price: "21,00",
        logo: "https://bit.ly/3mDx67S",
      },
    ],
  });
  return (
    <div className="offersContainer">
      <h1>Special Offers</h1>
      {offers.specialOffers.map((offer) => {
        return <OfferCard offer={offer} />;
      })}
    </div>
  );
}
