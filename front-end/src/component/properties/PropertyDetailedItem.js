import classes from "./PropertyItem.module.css";
import Cards from "../UI/detailCards";
import Box from '@material-ui/core/Box';

function PropertyDetailedItem(props) {
  console.log(props.properties.coverImageUrl)

  return (
    <div>
     <div style={{"text-align": "center"}}>
       <br/>
       <h1 style={{}}>{props.properties.title} </h1>
     </div>
     <div style={{"text-align": "center"}}>
       <img style={{"width": "80%", "height": "80%"}} src={props.properties.coverImageUrl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-een-zwart-lineair-fotocamera-logo-zoals-geen-afbeelding-beschikbaar-.jpg?ver=6";
          }}alt={props.properties.title} />
     </div>
     <div style={{ marginLeft: '10%',width: '80%' }}>
        <h3>City: {props.properties.city}</h3>
        <h3>PostalCode: {props.properties.postalCode}</h3>
        <h3>area:  {props.properties.areaSqm}m2</h3>
        <h3>Rent: €{props.properties.rent}</h3>
        <h3>Additional costs:€  {props.properties.additionalCosts}</h3>
        <h3>Deposit:€ {props.properties.deposit}</h3>
        <h3>Internet: {props.properties.internet}</h3>
        <h3>Preferred age: {props.properties.matchAge}</h3>
        <h3>Available rooms: {props.properties.matchCapacity}</h3>
        <h3>description: {props.properties.descriptionTranslatedRaw}</h3>
        
    </div>
    
    </div>



      // <Cards>
      //   <h2>{props.properties.title}</h2>
      //   <div className={classes.image}>
      //     <img  src={props.properties.coverImageUrl}
      //     onError={({ currentTarget }) => {
      //       currentTarget.onerror = null;
      //       currentTarget.src="https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-een-zwart-lineair-fotocamera-logo-zoals-geen-afbeelding-beschikbaar-.jpg?ver=6";
      //     }}
      //      alt={props.title} />
      //   </div>
      //   <div className={classes.content}>
      //     <address>{props.properties.postalCode}</address>
      //     <p>{props.properties.city}</p>
      //   </div>
      // </Cards>
    
  );
}

export default PropertyDetailedItem;
