import {useState} from 'react'
function SearchProductPage() {
  const [product, setProduct] = useState('')
  const [location, setLocation] = useState('')
  function submitHandler(){
    console.log(product)
  }
  return(
    <div>
      <input type="text" placeholder = "product barcode" onChange={event => {setProduct(event.target.value)}}/>
      <input type="text" placeholder = "location barcode"/>
      <button onClick={submitHandler}>add product to location</button>
    </div>
  );
}

export default SearchProductPage;
