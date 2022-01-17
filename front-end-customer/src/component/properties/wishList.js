//TODO

import classes from "./PropertyList.module.css";
import PropertyItem from "./PropertyItem";
import {useState} from 'react'
function PropertyList(props) {
  const [productBarcode, setProduct] = useState('')
  const [location, setLocation] = useState('')
  function submitHandler(){
    
  }
  console.log(props.wishLists)
  return (
    <div>
      <input type="text" placeholder = "product barcode" onChange={event => {setProduct(event.target.value)}}/>
    <ul className={classes.list}>
      {
      props.wishLists.wishList.filter((consumerId)=>{
        if(consumerId === ""){
          return product
        }else if(wishLists.includes(consumerId)){
          return product
        }
      }).map((product) => (
        <PropertyItem
          key={product.id}
          barcode={product.barcode}
          title={product.name}
          price={product.price}
          image={product.image}
          locationBarcode={product.locationBarcode}
        />
      ))}
    </ul>
    </div>
  );
}

export default PropertyList;
