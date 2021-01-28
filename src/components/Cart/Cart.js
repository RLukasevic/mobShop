import React from 'react';
import styles from './Cart.module.css';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';
import cartIcon from '../../assets/images/cart.png';

import CartMenu from './CartMenu/CartMenu';


const Cart = props => {

  return (
        <div className={styles.cartButton}>
            {props.cart.cartShow ? 
                <div onClick={() => props.toggleCart()} className={styles.cartIconWithCart}>X</div>: 
                <img onClick={() => props.toggleCart()} src={cartIcon} className={styles.cartIconWithoutCart} alt='cart'/>
            }
            {props.cart.cartShow ? 
                <div className={styles.cartMenu}><CartMenu/></div>:
                <div className={styles.cartMenuHidden}><CartMenu/></div>
            }
        </div>
  );
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(authActions.toggleCart()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);