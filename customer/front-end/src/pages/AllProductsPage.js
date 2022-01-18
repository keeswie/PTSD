import ProductList from "../component/properties/ProductList";
import { useState, useEffect } from "react";
import axios from "axios"

function AllProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products")
    .then((response) => {
      setLoadedProp(response.data)
      console.log(response.data)
      return response.data
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
      <ProductList products={loadedProp} />
    </section>
  );
}

export default AllProductsPage;
