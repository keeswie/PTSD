import axios from "axios"
import { useState, useEffect } from "react";
import classes from "../component/properties/products/PropertyItem.module.css"
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';




function SupplyOrderPage() {
    const [orderId, setOrderId] = useState()
    const [endArray, setArray] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProp, setLoadedProp] = useState([]); // all locations
    function generatorHandler(){
      fetch('https://rethink-supplier.herokuapp.com/order/',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Token 7dc1e21b6d67726dcdda3e071c06a3e195c36c89'
        }
      })
      .then(order => order.json())
      .then((order) => {
          console.log(order.id) //order id
          setOrderId(order.id)
          endArray.forEach(location => {
            if(location.productBarcode>3){
              
                fetch("http://localhost:3000/products/"+ location.productBarcode)
                .then(response => response.json())
                .then((data) => {
                  console.log(location.Aid)
                  
                  if(location.number< data.product[0].min){
                    const body = {
                      "product_id": location.Aid, "order_id": order.id , "nr_of_products": data.product[0].min
                    }
                    
                    fetch('https://rethink-supplier.herokuapp.com/orderline/',{
                      method: "POST",
                      body: JSON.stringify(body),
                      headers: {
                        'Content-Type': "application/json",
                        Authorization: 'Token 7dc1e21b6d67726dcdda3e071c06a3e195c36c89',
                      },
                    }).then(help => help.json())
                    .then((help) => {
                      console.log(help)
                    });                    
                  }                
                });
              
            }
          })          
      })
    }

    function sendHandler(){
      const body = { "order_id": orderId}
        
        fetch('https://rethink-supplier.herokuapp.com/send_order/',{
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            'Content-Type': "application/json",
            Authorization: 'Token 7dc1e21b6d67726dcdda3e071c06a3e195c36c89',
          },
        }).then(help => help.json())
        .then((help) => {
          console.log(help)
        });          
    }


    function makeTable(response){
        var array = []
        response.forEach(location => {
           if(location.productBarcode.length>3){
            fetch("http://localhost:3000/products/"+ location.productBarcode)
            .then(response => response.json())
            .then((data) => {
                //console.log(data)
                if(location.productNumber< data.product[0].min){
                    const amount =(data.product[0].min - location.productNumber)  
                array = array.concat({location: location.barcode
                    ,productBarcode: location.productBarcode
                    ,number: amount,
                    totalprice: (amount + " * " + data.product[0].price)
                    ,name : data.product[0].name
                    ,Aid: data.product[0].Aid
                    })
                }
                return array;
                
            })
            .then((newList) =>{
                setArray(newList)
            });
                          
           } 
        });
       return array;
    }


    useEffect(() => {       
        setIsLoading(true);
        axios.get("http://localhost:3000/locations/")
        .then((response) => {
          setLoadedProp(response.data)
          
          return response.data.Location
        })
        .then((response) => {
           //console.log(response) 
            makeTable(response)
        })
        .then(() =>{
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
            <button onClick={generatorHandler}>Generate supply order</button>
            <button onClick={sendHandler}>Send supply order</button>
          <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
           <AgGridReact
               rowData={endArray}>
               <AgGridColumn field="location"></AgGridColumn>
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="barcode"></AgGridColumn>
               <AgGridColumn field="number"></AgGridColumn>
               <AgGridColumn field="totalprice"></AgGridColumn>
           </AgGridReact>
       </div>
        </section>
      );

}

export default SupplyOrderPage;
