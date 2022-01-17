import classes from "./PropertyItem.module.css";
import Cards from "../UI/Cards";
import { useHistory } from "react-router-dom"
function PropertyItem(props) {
  let history = useHistory();
  function navigateHome (){
    history.push("/products/"+ props.barcode)
  }
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.image}>
          <img  src={props.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-een-zwart-lineair-fotocamera-logo-zoals-geen-afbeelding-beschikbaar-.jpg?ver=6";
          }}
           alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>price: {props.price}</p>
          <p>barcode: {props.barcode}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={navigateHome}>DETAILS</button>
          <button>update</button>
        </div>
      </Cards>
    </li>
  );
}

export default PropertyItem;
