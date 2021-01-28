import React, { useEffect } from 'react';
import styles from './Item.module.css';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';


const Item = props => {

    useEffect(() => {
        
    },[])

    let price = props.price.toFixed(2);

  return (
    <div className={styles.container}>
        <div className={styles.picNameWrap} onClick={props.click}>
            <img className={styles.image} src={props.image} alt={props.name}/>
            <div className={styles.name}>{props.name}</div>
        </div>
        <div className={styles.btnholder}></div>
        <div className={styles.price}>
            €
            <span className={styles.bigPrice}>
                {' ' + price.substring(0,price.length - 3)}
            </span>
            {price.substring(price.length - 3)}
        </div>
        <AddToCartButton itemId={props.itemId} price={props.price} />
    </div>
  );
}

export default Item;