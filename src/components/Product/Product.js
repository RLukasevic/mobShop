import React, { useEffect } from 'react';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Product.module.css';

import Cart from '../Cart/Cart';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';
import BackButton from '../UI/BackButton/BackButton';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/Error/Error';


const Product = props => {
    
    useEffect(() => {
        if(props.items === null) {
            props.initItems();
        }
    });

  return (
    <div>
        <Cart />
        {props.error ? <Error/> : props.items ? <div className={styles.wrapper}>
            <img className={styles.image} src={props.items[props.history.location.state.index].image} alt={props.items[props.history.location.state.index].title} />
            <div className={styles.rightSide}>
                <label className={styles.title}>{props.items[props.history.location.state.index].title}</label>
                <label className={styles.price}>{'€ ' + props.items[props.history.location.state.index].price.toFixed(2)}</label>
                <div className={styles.addToCart}>
                    <AddToCartButton itemId={props.items[props.history.location.state.index].id} price={props.items[props.history.location.state.index].price} />
                </div>
                <div className={styles.separatorLine} />
                <div className={styles.descWrap}>
                    <div className={styles.descTitle}>Product description</div>
                    <p className={styles.descContent}>{props.items[props.history.location.state.index].description}</p>
                </div>
                <div className={styles.back}>
                    <BackButton />
                </div>
            </div>
        </div> : <Spinner/>}
    </div>
  );
}


const mapStateToProps = state => {
    return {
        items: state.items.items,
        error: state.items.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initItems: () => dispatch(authActions.initItems()),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Product));
