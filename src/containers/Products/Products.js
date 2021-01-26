import React, { useEffect, useLayoutEffect } from 'react';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';


const Products = props => {

    useEffect(() => {
        props.initItems();
    },[])

    useLayoutEffect(() => {

    })

  return (
    <div>
        {props.items}
    </div>
  );
}


const mapStateToProps = state => {
    return {
        items: state.items,
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(authActions.toggleCart()),
        initItems: () => dispatch(authActions.initItems()),
        addToCart: () => dispatch(authActions.addToCart()),
        deleteFromCart: () => dispatch(authActions.deleteFromCart()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
