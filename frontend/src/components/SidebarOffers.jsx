import React, { useState, useEffect } from "react";
import "./SidebarOffers.css";
import SidebarOffersCards from "./SidebarOffersCards";
import Axios from "axios";

export default function SidebarOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3500/flights/specialoffers",
    })
      .then((res) => {
        console.log(res);
        if (res.data.specialOffers) {
          let specialOffers = res.data.specialOffers;
          console.log(specialOffers);
          setOffers(specialOffers);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [cardIndex, setCardIndex] = useState(0);

  const len = offers.length;

  const shuffle = () => {
    // check if we need to start over from the first index
    const resetIndex = cardIndex === len - 1;
    const index = resetIndex ? 0 : cardIndex + 1;
    // assign the logical index to card that will be used in render method
    setCardIndex(index);
  };

  //repeat the shuffle every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffle();
    }, 6000);
    //clearing the interval - dont understand why
    return () => clearInterval(interval);
  });
  // create a new array with 2 elements from specialOffers
  const activeCards = offers.slice(cardIndex, cardIndex + 2);

  // check the length of the new array (it’s less than 2 when index is at the end of the specialOffers array)
  const displayedCards =
    activeCards.length < 2
      ? // if the imageSourcesToDisplay's length is lower than 2 images than append missing images from the beginning of the original array
        [...activeCards, ...offers.slice(0, 2 - activeCards.length)]
      : activeCards;

  return (
    <div className="offersContainer">
      {displayedCards.map((item, index) => {
        return <SidebarOffersCards key={index} offers={item} />;
      })}
    </div>
  );
}
