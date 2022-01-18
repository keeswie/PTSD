//TODO
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';

import CustomerSearch from "../component/customer/CustomerSearch";

function CustomerSearchPage() {
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
            loading......
          </p>
        </section>
      );
    }
    return (
        <section>
            <CustomerSearch/>
        </section>
    );
}

export default CustomerSearchPage;
