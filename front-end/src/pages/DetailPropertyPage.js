
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';
import PropertyItem from "../component/properties/PropertyItem";
import PropertyList from "../component/properties/PropertyList";

function DetailPropertyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]);


  const { barcode } = useParams();
  console.log(barcode)
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products/"+barcode)
    .then((response) => {
      setLoadedProp(response.data.product)
      console.log(response.data.product)
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
      <h1>all products</h1>
      <PropertyList products={loadedProp} />
    </section>
  );
}

export default DetailPropertyPage;
