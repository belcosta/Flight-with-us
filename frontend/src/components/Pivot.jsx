import React, { useState, useEffect} from "react";
import "./pivot.css";
import OfferCard from "./offerCard";


export default function Pivot() {
  const [offers] = useState({
    specialOffers: [
      {
        departure: "Berlin",
        destination: "London",
        hourOfStart: "07:00",
        hourOfLanding: "09:00",
        price: "23,00",
        logo: "https://bit.ly/3mDx67S",
        background:
          "https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      },
      {
        departure: "Stockholm",
        destination: "Amsterdam",
        hourOfStart: "10:00",
        hourOfLanding: "11:00",
        price: "17,00",
        logo: "https://bit.ly/3mDx67S",
        background:
          "https://images.pexels.com/photos/2901481/pexels-photo-2901481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        departure: "Prague",
        destination: "Brussels",
        hourOfStart: "11:00",
        hourOfLanding: "13:00",
        price: "24,00",
        logo: "https://bit.ly/3mDx67S",
        background:
          "https://images.pexels.com/photos/1595086/pexels-photo-1595086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        departure: "Paris",
        destination: "Madrid",
        hourOfStart: "19:00",
        hourOfLanding: "22:30",
        price: "21,00",
        logo: "https://bit.ly/3mDx67S",
        background:
          "https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  });

  

  const [cardIndex, setCardIndex] = useState(0);

  const offersArr = offers.specialOffers;
  const len = offersArr.length;

 /*  const [cardStyle, setCardStyle] = useState({backgroundImage: `url(${offersArr[0].background})`}) */

  const shuffle = () => {
    // check if we need to start over from the first index
    const resetIndex = cardIndex === len - 1;
    const index = resetIndex ? 0 : cardIndex + 1;

    // assign the logical index to card that will be used in render method
    setCardIndex(index);
    //clear the transition of the card to the left.
   /* setCardStyle({backgroundImage: `url(${offersArr.background})`})*/
  };

/*   const [sliderStyle ] = useState({transform: translateX(-100%)',
  }) 
   */
  /* const slider = () => {
    const timer = setTimeout(()=> {
      setCardStyle(...cardStyle,  [sliderStyle])
    },4900);
    return () => clearTimeout(timer);
  } */

  //repeat the shuffle every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffle();
    }, 6000);
    //clearing the interval - dont understand why
    return () => clearInterval(interval);
  });
  // create a new array with 2 elements from specialOffers
  const activeCards = offersArr.slice(cardIndex, cardIndex + 2);

  // check the length of the new array (it’s less than 2 when index is at the end of the specialOffers array)
  const displayedCards =
    activeCards.length < 2
      ? // if the imageSourcesToDisplay's length is lower than 2 images than append missing images from the beginning of the original array
        [...activeCards, ...offersArr.slice(0, 2 - activeCards.length)]
      : activeCards;

  return (

      <div className="offersContainer">
        {displayedCards.map((item, index) => {
          return <OfferCard key={index} offersArr={item} /* style={cardStyle} slider={slider} *//>;
        })}
      </div>
 
  );
}
