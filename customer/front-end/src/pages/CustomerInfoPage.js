//TODO
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';

import CustomerInfo from "../component/customer/CustomerInfo";

function CustomerInfoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]);


  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/customers/"+id)
    .then((response) => {
      setLoadedProp(response.data.customer[0])
      console.log(loadedProp)
      return response.data.customer
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
      <h1>Customer Info</h1>
      <CustomerInfo
          key={loadedProp.id}
          title={loadedProp.name}
          address={loadedProp.address}
          email={loadedProp.email}
          wishList={loadedProp.wishList}/>
    </section>
  );
}

export default CustomerInfoPage;
