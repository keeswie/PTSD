//TODO

import classes from "./CustomerInfo.module.css";
import Cards from "../UI/Cards";
import { useHistory } from "react-router-dom"

function CustomerInfo(props) {
  let history = useHistory();
  function navigateHome (){
    history.push("/customers/"+ props.id)
  }
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>id: {props.id}</p>
          <p>address: {props.address}</p>
          <p>email: {props.email}</p>
          <p>wishlist: {props.wishList}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={navigateHome}>DETAILS</button>
          <button>update</button>
        </div>
      </Cards>
    </li>
  );
}

export default CustomerInfo;
