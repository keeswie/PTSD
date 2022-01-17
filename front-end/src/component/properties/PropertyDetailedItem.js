import classes from "./PropertyItem.module.css";
import {useState, useEffect} from 'react'
import axios from "axios";
function PropertyDetailedItem(props) {
  const [location, setLocation] = useState('')
  const [number, setNumber] = useState({})
  const [loadedProp, setLoadedProp] = useState([]);

  const oldNumber = 5;

  useEffect(() => {
    

  }, []);

  function submitHandler(){
    console.log(location)
    axios.get("http://localhost:3000/locations/" + location)
    .then((response) => {
      setLoadedProp(response.data)
      console.log(response.data)
      return response.data
    });
    fetch('http://localhost:3000/locations/'+ location,
    {
      method:'PUT',
      body: JSON.stringify([{
        productBarcode: props.barcode,
      }]
      ),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }
  return (
  
      <div>
        <div className={classes.backgroundimage}>
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
          <p>location: {props.locationBarcode ? props.locationBarcode: "not in store"} </p>
          <p>minimal in store: {props.min} </p>
        </div>
        <div style={{"textAlign": "center"}} >
        <input type="text" placeholder = "location barcode" onChange={event => {setLocation(event.target.value)}}/>
        <input type="number" placeholder = "add number" onChange={event => {setNumber(event.target.value)}}/>
        <button onClick={submitHandler}>add 1 to location</button>
        </div>
      </div>
    
  );
}

export default PropertyDetailedItem;
