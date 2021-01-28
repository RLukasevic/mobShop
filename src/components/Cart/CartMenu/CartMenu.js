import React from 'react';
import styles from './CartMenu.module.css';
import * as authActions from '../../../redux/actions/combined';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';


const CartMenu = props => {

    const formItems = () => {
        let temp = [...props.cart];
        let tempArr = [];

        temp.map(item => {
            let indexInItems = props.items.findIndex(e => e.id === item.id)
            tempArr.push(
            <CartItem 
                key={item.id}
                itemId={item.id}
                price={props.items[indexInItems].price}
                name={props.items[indexInItems].title}
                quantity={item.quantity}
                clickPlus={props.addToCart}
                clickMinus={props.deleteFromCart}
                clickX={props.removeItemFromCart}
            />)
            return null;
        })

        return tempArr
    }

    const checkOutHandler = () => {
        alert('checked out!')
        props.checkOutCartWhipe();
    }

  return (
        <div className={styles.menu}>
            <div className={styles.items}>
                {props.cart.length > 0 ? formItems() : <div className={styles.emptyCart}>Cart is empty, try filling it with items !</div>}
            </div>
            <div className={styles.cartFooter}>
                <div className={styles.subTotal}>
                    <span className={styles.subWord}>Subtotal:</span>
                    <span className={styles.totalPrice}>€ {props.cartSubTotal}</span>
                </div>
                <div 
                    className={props.cartSubTotal > 0 ? styles.checkoutButton : styles.checkoutButtonDisabled}
                    onClick={props.cartSubTotal > 0 ? () => checkOutHandler() : null}
                >
                    Checkout
                </div>
            </div>
        </div>
  );
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        cart: state.cart.cart,
        cartSubTotal: state.cart.cartSubTotal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: (id,price) => dispatch(authActions.deleteFromCart(id,price)),
        addToCart: (id,price) => dispatch(authActions.addToCart(id,price)),
        removeItemFromCart: (id,quantity,price) => dispatch(authActions.removeItemFromCart(id,quantity,price)),
        checkOutCartWhipe: () => dispatch(authActions.checkOutCartWhipe()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartMenu);