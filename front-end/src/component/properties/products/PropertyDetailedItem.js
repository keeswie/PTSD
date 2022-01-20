import classes from "./PropertyItem.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function PropertyDetailedItem(props) {

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
        <p>number of products in store: {props.productNumber?props.productNumber: 0} </p>
        <p>
          location:{" "}
          {props.locationBarcode ? props.locationBarcode : "not in store"}
        </p>
        
        <p>minimal in store: {props.min} </p>
      </div>
    </div>
  );
}

export default PropertyDetailedItem;
