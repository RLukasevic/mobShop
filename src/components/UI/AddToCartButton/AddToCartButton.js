import React from 'react';
import styles from './AddToCartButton.module.css';
import * as authActions from '../../../redux/actions/combined';
import { connect } from 'react-redux';


const AddToCartButton = props => {

  return (
    <div 
        className={props.cart.some(e => e.id === props.itemId) ? styles.addToCartButtonDisabled : styles.addToCartButton} 
        onClick={props.cart.some(e => e.id === props.itemId) ? null : () => props.addToCart(props.itemId, props.price)}
    >
        {props.cart.some(e => e.id === props.itemId) ? 'Already in the cart' : 'Add to cart'}
    </div>
  );
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id,price) => dispatch(authActions.addToCart(id,price)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddToCartButton);