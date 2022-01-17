
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';

import PropertyDetailedItem from "../component/properties/PropertyDetailedItem";

function DetailPropertyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]);


  const { barcode } = useParams();
  console.log(barcode)
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products/"+barcode)
    .then((response) => {
      setLoadedProp(response.data.product[0])
      console.log(loadedProp)
      return response.data.product
    })
    .then(() => {
      setIsLoading(false)
    });

  }, []);
  
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
          min={loadedProp.min} />
    </section>
  );
}

export default DetailPropertyPage;
