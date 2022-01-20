import LocationList from "../component/properties/locations/LocationList"
import classes from "../component/properties/products/PropertyItem.module.css"
import { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"


function AllLocationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProp, setLoadedProp] = useState([]);
  let history = useHistory();
  function supplyOrder(){
    history.push("/supplyorder")
  }
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/locations")
    .then((response) => {
      setLoadedProp(response.data)
      //console.log(response.data.Location)
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
      <div className={classes.actions}>
          <button onClick={supplyOrder}>Generate supply order</button>
        </div>
       <LocationList locations={loadedProp} />
    </section>
  );
}

export default AllLocationPage;
