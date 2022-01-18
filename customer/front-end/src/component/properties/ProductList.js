import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
import {useState} from 'react'
function ProductList(props) {
  const [productBarcode, setProduct] = useState('')
  const [location, setLocation] = useState('')
  function submitHandler(){
    
  }
  console.log(props.products)
  return (
    <div>
      <input type="text" placeholder = "product barcode" onChange={event => {setProduct(event.target.value)}}/>
    <ul className={classes.list}>
      {
      props.products.product.filter((product)=>{
        if(productBarcode === ""){
          return product
        }else if(product.barcode.includes(productBarcode)){
          return product
        }
      }).map((product) => (
        <ProductItem
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

export default ProductList;
