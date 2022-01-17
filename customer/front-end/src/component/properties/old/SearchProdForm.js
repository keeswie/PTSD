import { useState } from "react";
import classes from "./NewPropertyForm.module.css";
import itemclasses from "./PropertyItem.module.css";
import Cards from "../UI/Cards";
function SearchProdForm(props){
    const [barcode,setBarcode] = useState()
    const [location, setLocation] = useState()
    
    function submitHandler(event){
        event.preventDefault();
        
    }
}
export default SearchProdForm;