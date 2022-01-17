import classes from "./PropertyItem.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "react-dom";

function PropertyDetailedItem(props) {
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState({});
  const [loadedProp, setLoadedProp] = useState([]);

  const oldNumber = 5;

  useEffect(() => {}, []);
  function updatePostLocation(file, address) {
    fetch("http://localhost:3000/locations/" + address, {
      method: "PUT",
      body: JSON.stringify(file),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function updatePostProduct(file, address) {
    fetch("http://localhost:3000/products/" + address, {
      method: "PUT",
      body: JSON.stringify(file),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  function submitHandler() {
    console.log(location);
    axios
      .get("http://localhost:3000/locations/" + location)
      .then((response) => {
        setLoadedProp(response.data);
      });
      
    if(location === props.locationBarcode){
     let  num = number + loadedProp.docs[0].productNumber
      const update = {
        format: "json",
          "update": [{
            "propName":"productNumber", "value": number
          }]
      };
      console.log(num)
    }else{
      const update3 = {
        format: "json",
        "update": [{
            "propName":"productNumber", "value": 0,
          },{
            "propName": "productBarcode", "value": "",
          }]
        };
      updatePostLocation(update3, props.locationBarcode);
      const update = {
        format: "json",
          "update": [{
            "propName":"productNumber", "value": number,
          },{
            "propName": "productBarcode", "value": props.barcode,
          }]
      };
    
      updatePostLocation(update, location);
      const update2 = { 
        format: "json",
        "update": [{
          "propName":"locationBarcode", "value": location,
        }],
      };
      updatePostProduct(update2, props.barcode);
    }
  }
  return (
    <div>
      <div className={classes.backgroundimage}>
        <img
          src={props.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-een-zwart-lineair-fotocamera-logo-zoals-geen-afbeelding-beschikbaar-.jpg?ver=6";
          }}
          alt={props.title}
        />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>price: {props.price}</p>
        <p>barcode: {props.barcode}</p>
        <p>
          location:{" "}
          {props.locationBarcode ? props.locationBarcode : "not in store"}{" "}
        </p>
        <p>minimal in store: {props.min} </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="location barcode"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="add number"
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
        <button onClick={submitHandler}>add 1 to location</button>
      </div>
    </div>
  );
}

export default PropertyDetailedItem;
