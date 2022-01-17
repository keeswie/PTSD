import classes from './Cards.module.css';

function detailCards(props){
    return <div className={classes.cardd}>{props.children}</div>
}

export default detailCards;