import React from 'react';
import styles from './CartItem.module.css';

const CartItem = props => {

  return (
        <div className={styles.menuItem}>
            <div className={styles.deleteButton}><span onClick={() => props.clickX(props.itemId,props.quantity,props.price)} className={styles.xButton}>x</span></div>
            <div className={styles.namePriceRow}>
                <span className={styles.name}>
                    {props.name}
                </span>
                <span className={styles.price}>
                    € {Number(props.price * props.quantity).toFixed(2)}
                </span>
            </div>
            <div className={styles.quantity}>
                Quantity: {props.quantity}
            </div>
            <div className={styles.buttons}>
                <span 
                    className={props.quantity === 1 ? styles.buttonDisabled : styles.button} 
                    onClick={props.quantity === 1 ? null : () => props.clickMinus(props.itemId, props.price)}
                >
                    -
                </span>
                <span className={styles.button} onClick={() => props.clickPlus(props.itemId, props.price)}>+</span>
            </div>
        </div>
  );
}

export default CartItem;