import "./offerCard.css"
import {Button} from "react-bootstrap";


export default function OfferCard(props) {
  const offersArr = props.offersArr;
  /* const style = props.style; */
  

  /* useEffect(()=>{
    props.slider();
  })
  */

  return (
   
    <article className="cardContainer" style={{backgroundImage: `url(${offersArr.background})`}}>
      <div className="cardDetails">
        <div className="banner" style={{backgroundImage: `url(${offersArr.logo})`}}>
          </div>
        <h2>
          {offersArr.departure} to {offersArr.destination}
        </h2>
        <h4>departure time: {offersArr.hourOfStart}</h4>
        <h4>arrival time: {offersArr.hourOfLanding}</h4>
        <h3>From {offersArr.price} €</h3>
        <Button type="submit">Reserve Seat</Button>
      </div>
    </article>

  );
}
