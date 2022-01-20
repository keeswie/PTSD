import classes from "../PropertyList.module.css";
import LocationItem from "./LocationItem"
import {useState} from 'react'
function LocationList(props) {
  const [productBarcode, setProduct] = useState('')
  console.log(props.locations)
  return (
    <div>
      <input type="text" placeholder = "location barcode" onChange={event => {setProduct(event.target.value)}}/>
    <ul className={classes.list}>
      {
      props.locations.Location
      .filter((location)=>{
        if(productBarcode === ""){
          return location
        }else if(location.barcode.includes(productBarcode)){
          return location
        }
      })
      
      .map((location) => (
        <LocationItem
          key={location.id}
          barcode={location.barcode}
          productNumber={location.productNumber}
          productBarcode={location.productBarcode? location.productBarcode : "no product in shelve"}
        />
      ))
      }
    </ul>
    </div>
  );
}

export default LocationList;
