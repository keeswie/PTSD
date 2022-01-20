
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';

import PropertyDetailedItem from "../component/properties/products/PropertyDetailedItem";

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


function DetailPropertyPage() {
  function reloadProduct(){
      axios.get("http://localhost:3000/products/"+barcode.barcode)
    .then((response) => {
      setLoadedProp(response.data.product[0])
      return response.data.product
    })
    setBarcode({barcode: barcode.barcode});
    return
    }
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]); // loaded product
  const [location, setLocation] = useState(""); //location searcbar
  const [number, setNumber] = useState({}); //added number
  const [loadedLoc, setloadedLoc] = useState([]); //loaded location
  const [barcode, setBarcode] = useState(useParams());
  const [usableLock, setUsableLock] = useState([]);
  function submitHandler() {
    console.log(location);
    axios
      .get("http://localhost:3000/locations/" + location)
      .then((response) => {
        setloadedLoc(response.data);
        console.log(loadedLoc)
      });
    if(location === loadedProp.locationBarcode){
      var N1 = parseInt(number)
      var N2 = parseInt(loadedLoc.docs[0].productNumber)
      var N3 = parseInt(N1+N2)
      console.log(N3)

      const update = {
        format: "json",
          "update": [{
            "propName":"productNumber", "value": N3
          }]
      };
      console.log(update)
      updatePostLocation(update, location);
      reloadProduct()
    }else{
      const update3 = {
        format: "json",
        "update": [{
            "propName":"productNumber", "value": 0,
          },{
            "propName": "productBarcode", "value": "",
          }]
        };
      updatePostLocation(update3, loadedProp.locationBarcode);
      const update = {
        format: "json",
          "update": [{
            "propName":"productNumber", "value": number,
          },{
            "propName": "productBarcode", "value": loadedProp.barcode,
          }]
      };
    
      updatePostLocation(update, location);
      const update2 = { 
        format: "json",
        "update": [{
          "propName":"locationBarcode", "value": location,
        }],
      };
      updatePostProduct(update2, loadedProp.barcode);
      
    }
    reloadProduct()
  }
  
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products/"+barcode.barcode)
    .then((response) => {
      setLoadedProp(response.data.product[0])
      axios
      .get("http://localhost:3000/locations/" + response.data.product[0].locationBarcode)
      .then((response) => {
        setUsableLock(response.data.docs[0]);
      });
      return response.data.product
    })
    .then(() => {
      setIsLoading(false)
    });

  }, [loadedLoc]);
  
  if(isLoading){
    return (
      <section>
        <p>
          loading...
        </p>
      </section>
    );
  }
  return (
    <section>
      <h1>detailed product</h1>
      <PropertyDetailedItem
          key={loadedProp.id}
          barcode={loadedProp.barcode}
          title={loadedProp.name}
          price={loadedProp.price}
          image={loadedProp.image}
          locationBarcode={loadedProp.locationBarcode}
          productNumber={usableLock.productNumber} 
          min={loadedProp.min} />
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
    </section>
  );
}

export default DetailPropertyPage;
