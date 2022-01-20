import classes from "../products/PropertyItem.module.css";
import Cards from "../../UI/Cards";
import { useHistory } from "react-router-dom"
function PropertyItem(props) {  
    let history = useHistory();
  function navigateHome (){
    if(props.productNumber){
    history.push("/products/"+ props.productBarcode)
    }
  }
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.image}>
          <img  src= "https://cgaxisimages.fra1.cdn.digitaloceanspaces.com/2014/09/cgaxis_models_32_02a.jpg"
           alt={props.barcode} />
        </div>
        <div className={classes.content}>
          <h3>barcode: {props.barcode}</h3>
          <p>product barcode: {props.productBarcode}</p>
          <p>amount in shelve: {props.productNumber}</p>
        </div>
        <div className={classes.actions}>
        <button onClick={navigateHome}>Details</button>
        </div>
      </Cards>
    </li>
  );
}

export default PropertyItem;
